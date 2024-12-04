import { IConfigGet, IPage, IPageable, IQueryParams } from "@/types";
import { Document, HydratedDocument, Model } from "mongoose";

export interface IDB {
    get<IType, IQuery extends IQueryParams>(model: Model<IType>, query: IQuery, config?: IConfigGet): Promise<Array<HydratedDocument<IType> | null | IType>>
    getCount<IType, IQuery extends IQueryParams>(model: Model<IType>, query: IQuery): Promise<number>
    getById<IType>(model: Model<IType>, id: string, config?: IConfigGet): Promise<HydratedDocument<IType> | null | IType>
    getByCollectionsOfIds<IType>(model: Model<IType>, ids: string[], config?: IConfigGet): Promise<Array<HydratedDocument<IType> | null | IType>>
    getPage<IType, IQuery extends IQueryParams>(model: Model<IType>, query: IQuery, pageOptions: IPageable, config?: IConfigGet): Promise<IPage<HydratedDocument<IType> | null | IType>>
    create<IType, ICreate>(model: Model<IType>, params: ICreate): Promise<IType>
    update<IType, IUpdate>(model: Model<IType>, idDoc: string, params: IUpdate): Promise<HydratedDocument<IType> | null | IType>
    delete<IType>(model: Model<IType>, idDoc: string): Promise<HydratedDocument<IType> | null | IType>
}