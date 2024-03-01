import { ITask, ITaskContructor, ITaskJSON } from "../types";

export class Module1 implements ITask {
    id: string
    title: string
    description?: string
    active: boolean
    color?: string

    createdAt: Date
    updatedAt: Date

    constructor(params: ITaskContructor) {
        const { id, title, description, active, color, createdAt, updatedAt } = params
        this.id = id
        this.title = title
        this.description = description
        this.active = active
        this.color = color
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }

    toJSON(): ITaskJSON {
        return this
    }
}