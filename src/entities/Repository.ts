import { IConfigGet, IDB, IFactory, IModelDocument, IPageable, IQueryParams, IRepostories, IPage } from "@/types";
import { Model as MongooseModel } from "mongoose";
import DB from "@/repositories";


export class Repository<ITypeDB, IModelType, IType extends IModelDocument<ITypeDB>, IQuery extends IQueryParams, ICreate, IUpdate> implements IRepostories {
    protected DB: IDB
    protected factory: IFactory<ITypeDB, IModelType>
    protected document: MongooseModel<IType>

    constructor(document: MongooseModel<IType>, factory: IFactory<ITypeDB, IModelType>) {
        this.DB = DB
        this.document = document;
        this.factory = factory;
    }

    async get(query: IQuery, config?: IConfigGet): Promise<IModelType[]> {
        const elements = await this.DB.get<IType, IQuery>(this.document, query, config);
        return elements.map(element => this.factory.createByDB(element?.toJSONFor())).filter(elem => elem !== null) as IModelType[]
    }

    async getCount(query: IQuery): Promise<number> {
        return await this.DB.getCount<IType, IQuery>(this.document, query);
    }

    async getById(elementId: string): Promise<IModelType | null> {
        const element = await this.DB.getById<IType>(this.document, elementId);
        return this.factory.createByDB(element?.toJSONFor());
    }

    async getByCollectionsOfIds(elementsIds: string[]): Promise<IModelType[]> {
        const elements = await this.DB.getByCollectionsOfIds<IType>(this.document, elementsIds);
        return elements.map(element => this.factory.createByDB(element?.toJSONFor())).filter(elem => elem !== null) as IModelType[]
    }

    async getPage(query: IQuery, pageOptions: IPageable): Promise<IPage<IModelType>> {
        const page = await this.DB.getPage<IType, IQuery>(this.document, query, pageOptions);
        return {
            ...page,
            elements: page.elements.map(element => this.factory.createByDB(element?.toJSONFor())).filter(elem => elem !== null) as IModelType[]
        }
    }

    async create(params: ICreate): Promise<IModelType | null> {
        const element = await this.DB.create<IType, ICreate>(this.document, params);
        return this.factory.createByDB(element?.toJSONFor());
    }

    async update(elementId: string, params: IUpdate): Promise<IModelType | null> {
        const element = await this.DB.update<IType, IUpdate>(this.document, elementId, params);
        return this.factory.createByDB(element?.toJSONFor());
    }

    async delete(elementId: string): Promise<IModelType | null> {
        const element = await this.DB.delete<IType>(this.document, elementId);
        return this.factory.createByDB(element?.toJSONFor());
    }

}