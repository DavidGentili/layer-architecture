import { Repository } from "@/entities/Repository";
import { ICreateTask, ITask, ITaskDB, ITaskDocument, ITaskRepositories, IQueryTask, IUpdateTask } from "../types";
import schema from "./schema";
import Factory from './factory'

export default class TaskRepositories extends Repository<
    ITaskDB,
    ITask,
    ITaskDocument,
    IQueryTask,
    ICreateTask,
    IUpdateTask
> implements ITaskRepositories {

    constructor() {
        super(schema, Factory)
    }
}
