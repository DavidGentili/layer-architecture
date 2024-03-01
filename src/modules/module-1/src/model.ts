import { Model } from "@/entities/Model"
import { ICreateModule1, IModule1, IModule1Model, IModule1Repositories, IQueryModule1, IUpdateModule1 } from "../types";
import { IConfigGet, IPageable, IPage } from "@/types";
import ModelError from "@/exceptions/ModelError";

export default class Module1Model extends Model implements IModule1Model {

    repository: IModule1Repositories;

    constructor(repository: IModule1Repositories) {
        super(repository);
    }

    get(params: IQueryModule1, config?: IConfigGet | undefined): Promise<IModule1[]> {
        throw new Error("Method not implemented.");
    }
    getById(elementId: string): Promise<IModule1 | null> {
        throw new Error("Method not implemented.");
    }
    getPage(params: IQueryModule1, pageOptions: IPageable): Promise<IPage<IModule1>> {
        throw new Error("Method not implemented.");
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