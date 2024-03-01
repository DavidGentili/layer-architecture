import { IModule1, IModule1Constructor, IModule1JSON, IObjectParam } from "../types";

export class Module1 implements IModule1 {
    id: string
    stringParam: string
    numberParam: number
    booleanParm: boolean
    objectParam: IObjectParam

    constructor(params: IModule1Constructor) {
        const { id, stringParam, numberParam, booleanParm, objectParam } = params
        this.id = id
        this.stringParam = stringParam
        this.numberParam = numberParam
        this.booleanParm = booleanParm
        this.objectParam = objectParam
    }

    toJSON(): IModule1JSON {
        return this
    }
}