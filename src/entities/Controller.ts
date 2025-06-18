import { IModel } from "@/types";


export abstract class Controller {
    protected readonly model?: IModel;

    constructor(model?: IModel) {
        this.model = model;
    }
}

