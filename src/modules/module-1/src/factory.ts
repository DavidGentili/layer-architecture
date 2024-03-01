import { IFactory } from "@/types";
import { IModule1, IModule1DB } from "../types";
import { Module1 } from "./entities";


export function createModule1ByDB(element: IModule1DB | undefined): IModule1 | null {
    if (!element)
        return null;
    const { _id, stringParam, numberParam, booleanParm, objectParam } = element;
    return new Module1({ id: _id.toString(), stringParam, numberParam, booleanParm, objectParam })
}

const Module1Factory: IFactory<IModule1DB, IModule1> = {
    createByDB: createModule1ByDB,
}

export default Module1Factory