import { IConfigGet, IControllers, IModel, IModelDocument, IPage, IPageable, IRepostories, IRouter } from "@/types"
import { Request, Response } from "express"

export interface IModule1Data {
    stringParam: string
    numberParam: number
    booleanParm: boolean
    objectParam: IObjectParam
}

export interface IObjectParam {

}

export interface IModule1 extends IModule1Data {
    id: string

    toJSON(): IModule1JSON;
}

export interface IModule1JSON extends IModule1Data {
    id: string
}

export interface IModule1DB extends IModule1Data {
    _id: string
}

export interface IModule1Constructor {
    id: string,
    stringParam: string
    numberParam: number
    booleanParm: boolean
    objectParam: IObjectParam
}

export type IQueryModule1 = {
    stringParam?: string
    numberParam?: number
    booleanParm?: boolean
}

export interface ICreateModule1 {
    stringParam: string
    numberParam: number
    booleanParm: boolean
    objectParam: IObjectParam
}

export interface IUpdateModule1 {
    stringParam?: string
    numberParam?: number
    booleanParm?: boolean
    objectParam?: IObjectParam
}


export interface IModule1Model extends IModel {
    get(params: IQueryModule1, config?: IConfigGet): Promise<IModule1[]>
    getById(elementId: string, config?: IConfigGet): Promise<IModule1 | null>
    getPage(params: IQueryModule1, pageOptions: IPageable, config?: IConfigGet): Promise<IPage<IModule1>>

    create(params: ICreateModule1): Promise<IModule1>
    update(elementId: string, params: IUpdateModule1): Promise<IModule1>
    delete(elementId: string): Promise<IModule1>

}

export interface IModule1Controllers extends IControllers {
    get(req: Request, res: Response): Promise<void>
    getPage(req: Request, res: Response): Promise<void>
    create(req: Request, res: Response): Promise<void>
    update(req: Request, res: Response): Promise<void>
    delete(req: Request, res: Response): Promise<void>
}

export interface IModule1Router extends IRouter {
}

export interface IModule1Repositories extends IRepostories {
    get(params: IQueryModule1, config?: IConfigGet): Promise<IModule1[]>
    getCount(params: IQueryModule1): Promise<number>
    getById(elementId: string, config?: IConfigGet): Promise<IModule1 | null>
    getPage(params: IQueryModule1, pageOptions: IPageable, config?: IConfigGet): Promise<IPage<IModule1>>

    create(params: ICreateModule1): Promise<IModule1 | null>
    update(elementId: string, params: IUpdateModule1): Promise<IModule1 | null>
    delete(elementId: string): Promise<IModule1 | null>
}

export type IModule1Document = IModule1DB & IModelDocument<IModule1DB>