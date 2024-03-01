import { Router } from "express";
import { Document, HydratedDocument, Model } from "mongoose";


export interface IQueryParams {
    [key: string]: number | Object | string | boolean | undefined;
}

export interface IModelDocument<T> extends Document {
    toJSONFor: () => T;
}

export interface IConfigGet {
    limit?: number,
    offset?: number,
    sort?: 1 | -1,
    projection?: {
        [key: string] : number
    }
}

export type IQueryFormat = {
    key: string,
    type: string,
}

export interface IPageable {
    pageSize?: number,
    page?: number
    sort?: 1 | -1,
}

export interface IPage<T> {
    page: number,
    pageSize: number,
    elements: T[],
    totalCount: number,
    nextPage: number
}

export interface IModel {
    // repository: IRepostories
}

export interface IRouter {
    // controller: IControllers
    getRouter: () => Router
}

export interface IRepostories {

}

export interface IControllers {
    // model: IModel
}

export interface IModule {
    getRouter: () => Router
}


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

export interface IFactory<InputType, OutputType> {
    createByDB(document: InputType | undefined): OutputType | null
}
