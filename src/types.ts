import { Router } from "express";
import { Document } from "mongoose";


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
    sortParam?: string
    projection?: {
        [key: string]: number
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

export interface IFactory<InputType, OutputType> {
    createByDB(document: InputType | undefined): OutputType | null
}
