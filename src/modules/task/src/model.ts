import { Model } from "@/entities/Model"
import { ICreateTask, ITask, ITaskModel, ITaskRepositories, IQueryTask, IUpdateTask } from "../types";
import { IConfigGet, IPageable, IPage } from "@/types";
import ModelError from "@/exceptions/ModelError";

export default class TaskModel extends Model implements ITaskModel {

    repository: ITaskRepositories;

    constructor(repository: ITaskRepositories) {
        super(repository);
    }

    get(params: IQueryTask, config?: IConfigGet | undefined): Promise<ITask[]> {
        return this.repository.get(params, config)
    }

    getById(elementId: string, config?: IConfigGet): Promise<ITask | null> {
        return this.repository.getById(elementId, config)
    }

    getPage(params: IQueryTask, pageOptions: IPageable, config?: IConfigGet): Promise<IPage<ITask>> {
        return this.repository.getPage(params, pageOptions, config)
    }

    async create(params: ICreateTask): Promise<ITask> {
        try {
            const task = await this.repository.create(params)
            if (!task)
                throw ''
            return task
        } catch (e: any) {
            throw e.id ? e : new ModelError('Aca se debe trabajar la excepcion para emitir la indicada')
        }
    }

    async update(elementId: string, params: IUpdateTask): Promise<ITask> {
        try {
            const task = await this.repository.update(elementId, params)
            if (!task)
                throw ''
            return task
        } catch (e: any) {
            throw e.id ? e : new ModelError('Aca se debe trabajar la excepcion para emitir la indicada')
        }
    }

    async delete(elementId: string): Promise<ITask> {
        try {
            const task = await this.repository.delete(elementId)
            if (!task)
                throw ''
            return task
        } catch (e: any) {
            throw e.id ? e : new ModelError('Aca se debe trabajar la excepcion para emitir la indicada')
        }
    }

}