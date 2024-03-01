import { IModule } from "@/types";
import Module1Controller from "./src/controllers";
import Module1Model from "./src/model";
import Module1Repositories from "./src/repositories";
import Module1Router from "./src/router";
import { IModule1Model, IModule1Router } from "./types";


class Module1Module {
    private static instance: Module1Module | null = null;

    model: IModule1Model
    router: IModule1Router

    private constructor() {
        this.model = new Module1Model(new Module1Repositories());
        this.router = new Module1Router(new Module1Controller(this.model))
    }

    public static getInstance() {
        if (!Module1Module.instance)
            Module1Module.instance = new Module1Module();
        return Module1Module.instance
    }
}

const module1Module = Module1Module.getInstance();

const Module1: IModule1Model & IModule = {
    get: module1Module.model.get.bind(module1Module.model),
    getById: module1Module.model.getById.bind(module1Module.model),
    getPage: module1Module.model.getPage.bind(module1Module.model),

    create: module1Module.model.create.bind(module1Module.model),

    update: module1Module.model.update.bind(module1Module.model),

    delete: module1Module.model.delete.bind(module1Module.model),

    getRouter: module1Module.router.getRouter.bind(module1Module.router)
}

export default Module1;