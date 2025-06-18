import { IRepostories } from "@/types";


export abstract class Model {
    protected readonly repository?: IRepostories;

    constructor(repository?: IRepostories) {
        this.repository = repository;
    }
}