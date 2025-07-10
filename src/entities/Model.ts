import { IRepostories, IService } from "@/types";


export abstract class Model {
    protected readonly repository?: IRepostories;
    protected readonly service?: IService;

    constructor(repository?: IRepostories, service?: IService) {
        this.repository = repository;
        this.service = service;
    }
}