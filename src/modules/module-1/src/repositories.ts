import { Repository } from "@/entities/Repository";
import { ICreateModule1, IModule1, IModule1DB, IModule1Document, IModule1Repositories, IQueryModule1, IUpdateModule1 } from "../types";
import schema from "./schema";
import Factory from './factory'

export default class Module1Repositories extends Repository<
    IModule1DB,
    IModule1,
    IModule1Document,
    IQueryModule1,
    ICreateModule1,
    IUpdateModule1
> implements IModule1Repositories {

    constructor() {
        super(schema, Factory)
    }
}
