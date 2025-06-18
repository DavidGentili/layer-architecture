import { Model } from "@/entities/Model"
import { ICreateModule1, IModule1, IModule1Model, IModule1Repositories, IQueryModule1DB, IUpdateModule1 } from "../types";
import { IConfigGet, IPageable, IPage } from "@/types";
import ModelError from "@/exceptions/entities/ModelError";

export default class Module1Model extends Model implements IModule1Model {

    repository: IModule1Repositories;

    constructor(repository: IModule1Repositories) {
        super(repository);
    }

    get(params: IQueryModule1DB, config?: IConfigGet | undefined): Promise<IModule1[]> {
        throw new Error("Method not implemented.");
        return this.repository.get(params, config)
    }
    getById(elementId: string): Promise<IModule1 | null> {
        throw new Error("Method not implemented.");
        return this.repository.getById(elementId)
    }
    getPage(params: IQueryModule1DB, pageOptions: IPageable, config?: IConfigGet | undefined): Promise<IPage<IModule1>> {
        throw new Error("Method not implemented.");
        return this.repository.getPage(params, pageOptions, config)
    }

    async create(params: ICreateModule1): Promise<IModule1> {
        try {
            throw new Error("Method not implemented.");
        } catch (e: any) {
            throw e.id ? e : new ModelError('Aca se debe trabajar la excepcion para emitir la indicada')
        }
    }

    async update(elementId: string, params: IUpdateModule1): Promise<IModule1> {
        try {
            throw new Error("Method not implemented.");
        } catch (e: any) {
            throw e.id ? e : new ModelError('Aca se debe trabajar la excepcion para emitir la indicada')
        }
    }

    async delete(elementId: string): Promise<IModule1> {
        try {
            throw new Error("Method not implemented.");
        } catch (e: any) {
            throw e.id ? e : new ModelError('Aca se debe trabajar la excepcion para emitir la indicada')
        }
    }

}