import { Repository } from "@/entities/Repository";
import { ICreateModule1DB, IModule1, IModule1DB, IModule1Document, IModule1Repositories, IQueryModule1DB, IUpdateModule1DB } from "../types";
import schema from "./schema";
import Factory from './factory'

export default class Module1Repositories extends Repository<
    IModule1DB,
    IModule1,
    IModule1Document,
    IQueryModule1DB,
    ICreateModule1DB,
    IUpdateModule1DB
> implements IModule1Repositories {

    constructor() {
        super(schema, Factory)
    }
}
