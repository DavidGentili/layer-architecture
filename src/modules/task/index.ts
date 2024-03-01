import { IModule } from "@/types";
import Module1Controller from "./src/controllers";
import TaskModel from "./src/model";
import TaskRepositories from "./src/repositories";
import TaskRouter from "./src/router";
import { ITaskModel, ITaskRouter } from "./types";


class TaskModule {
    private static instance: TaskModule | null = null;

    model: ITaskModel
    router: ITaskRouter

    private constructor() {
        this.model = new TaskModel(new TaskRepositories());
        this.router = new TaskRouter(new Module1Controller(this.model))
    }

    public static getInstance() {
        if (!TaskModule.instance)
            TaskModule.instance = new TaskModule();
        return TaskModule.instance
    }
}

const taskModule = TaskModule.getInstance();

const Task: ITaskModel & IModule = {
    get: taskModule.model.get.bind(taskModule.model),
    getById: taskModule.model.getById.bind(taskModule.model),
    getPage: taskModule.model.getPage.bind(taskModule.model),

    create: taskModule.model.create.bind(taskModule.model),

    update: taskModule.model.update.bind(taskModule.model),

    delete: taskModule.model.delete.bind(taskModule.model),

    getRouter: taskModule.router.getRouter.bind(taskModule.router)
}

export default Task;