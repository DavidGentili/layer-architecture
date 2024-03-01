import { IConfigGet, IControllers, IModel, IModelDocument, IPage, IPageable, IRepostories, IRouter } from "@/types"
import { Request, Response } from "express"

export interface ITaskData {
    title: string
    description?: string
    active: boolean
    color?: string

    createdAt: Date
    updatedAt: Date

}


export interface ITask extends ITaskData {
    id: string

    toJSON(): ITaskJSON;
}

export interface ITaskJSON extends ITaskData {
    id: string
}

export interface ITaskDB extends ITaskData {
    _id: string
}

export interface ITaskContructor {
    id: string,
    title: string
    description?: string
    active: boolean
    color?: string

    createdAt: Date
    updatedAt: Date
}

export type IQueryTask = {
    id?: string,
    title?: string
    active?: boolean
    color?: string
}

export interface ICreateTask {
    title: string
    description?: string
    active?: boolean
    color?: string
}

export interface IUpdateTask {
    title?: string
    description?: string
    active?: boolean
    color?: string
}

export interface ITaskRouter extends IRouter {
}

export interface ITaskControllers extends IControllers {
    get(req: Request, res: Response): Promise<void>
    getPage(req: Request, res: Response): Promise<void>
    create(req: Request, res: Response): Promise<void>
    update(req: Request, res: Response): Promise<void>
    delete(req: Request, res: Response): Promise<void>
}

export interface ITaskModel extends IModel {
    get(params: IQueryTask, config?: IConfigGet): Promise<ITask[]>
    getById(taskId: string, config?: IConfigGet): Promise<ITask | null>
    getPage(params: IQueryTask, pageOptions: IPageable, config?: IConfigGet): Promise<IPage<ITask>>

    create(params: ICreateTask): Promise<ITask>
    update(taskId: string, params: IUpdateTask): Promise<ITask>
    delete(taskId: string): Promise<ITask>

}

export interface ITaskRepositories extends IRepostories {
    get(params: IQueryTask, config?: IConfigGet): Promise<ITask[]>
    getCount(params: IQueryTask): Promise<number>
    getById(taskId: string, config?: IConfigGet): Promise<ITask | null>
    getPage(params: IQueryTask, pageOptions: IPageable, config?: IConfigGet): Promise<IPage<ITask>>

    create(params: ICreateTask): Promise<ITask | null>
    update(taskId: string, params: IUpdateTask): Promise<ITask | null>
    delete(taskId: string): Promise<ITask | null>
}

export type ITaskDocument = ITaskDB & IModelDocument<ITaskDB>