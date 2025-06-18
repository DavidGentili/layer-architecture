import DBError from "@/exceptions/entities/DBError";
import clearParams from "@/helpers/cleanParams";
import { IConfigGet, IPage, IPageable, IQueryParams } from "@/types";
import { HydratedDocument, Model, Types } from "mongoose";

type ObjectWithId = {
    _id?: string
}

export async function getDocuments<IType, IQuery extends IQueryParams>(model: Model<IType>, query: IQuery, config?: IConfigGet): Promise<Array<HydratedDocument<IType> | null | IType>> {
    try {
        const objectWithId: ObjectWithId = { _id: query['id'] as string | undefined }
        delete query['id']
        const keys: string[] = Object.keys(query);
        clearParams(objectWithId, ['_id']);
        clearParams(query, keys)

        const { limit = 0, offset = 0, sort = 1, projection } = config || {}

        const params: any = { ...objectWithId, ...query };
        return (await model.find(params, projection).sort({ "createdAt": sort }).skip(offset).limit(limit));
    } catch (e: any) {
        throw (e && e.id) ? e : new DBError('Error al actualizar el documento');
    }
}

export async function getDocumentById<IType>(model: Model<IType>, id: string, config?: IConfigGet): Promise<HydratedDocument<IType> | null | IType> {
    try {
        const { projection } = config || {};
        return await model.findOne({ _id: new Types.ObjectId(id) }, projection);
    } catch (e: any) {
        throw (e && e.id) ? e : new DBError('Error al actualizar el documento');
    }
}

export async function getDocumentsByCollectionsOfIds<IType>(model: Model<IType>, ids: string[], config?: IConfigGet): Promise<Array<HydratedDocument<IType> | null | IType>> {
    try {
        const { projection } = config || {};
        return await model.find({
            _id: { $in: ids.map(id => new Types.ObjectId(id)) }
        }, projection);
    } catch (e: any) {
        throw (e && e.id) ? e : new DBError('Error al actualizar el documento');
    }
}

export async function getCount<IType, IQuery extends IQueryParams>(model: Model<IType>, query: IQuery): Promise<number> {
    try {
        const keys: string[] = Object.keys(query);
        clearParams(query, keys)
        const params: any = { ...query };
        return await model.countDocuments(params);
    } catch (e: any) {
        throw e.id ? e : new DBError('Error al obtener la cuenta de la colleccion')
    }
}

export async function getPage<IType, IQuery extends IQueryParams>(model: Model<IType>, query: IQuery, pageOptions: IPageable, config?: IConfigGet): Promise<IPage<HydratedDocument<IType> | null | IType>> {
    try {
        const { pageSize = 10, page = 0, sort = 1 } = pageOptions;
        const { projection } = config || {};
        const offset = pageSize * page;
        const elements = await getDocuments<IType, IQuery>(model, query, {
            offset,
            limit: pageSize,
            sort,
            projection
        })
        const count = await getCount<IType, IQuery>(model, query)

        return {
            page,
            pageSize,
            elements: elements,
            totalCount: count,
            nextPage: offset + pageSize > count ? -1 : page + 1,
        }
    } catch (e: any) {
        throw e.id ? e : new DBError('Error al obtener la pagina');
    }
}