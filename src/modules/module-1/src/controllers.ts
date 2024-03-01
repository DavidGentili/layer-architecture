import { Controller } from "@/entities/Controller";
import { IModule1Controllers, IModule1Model } from "../types";
import { Request, Response } from "express";

export default class Module1Controller extends Controller implements IModule1Controllers {

    model: IModule1Model

    constructor(model: IModule1Model) {
        super(model);
    }

    async get(req: Request, res: Response): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    async getPage(req: Request, res: Response): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    async create(req: Request, res: Response): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    async update(req: Request, res: Response): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    async delete(req: Request, res: Response): Promise<void> {
        throw new Error("Method not implemented.");
    }

}