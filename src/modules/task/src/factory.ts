import { IFactory } from "@/types";
import { ITask, ITaskDB } from "../types";
import { Module1 } from "./entities";


export function createModule1ByDB(task: ITaskDB | undefined): ITask | null {
    if (!task)
        return null;
    const { _id, title, description, active, color, createdAt, updatedAt } = task;
    return new Module1({ id: _id.toString(), title, description, active, color, createdAt, updatedAt })
}

const Module1Factory: IFactory<ITaskDB, ITask> = {
    createByDB: createModule1ByDB,
}

export default Module1Factory