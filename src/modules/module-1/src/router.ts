import { Router, Request, Response, NextFunction } from "express";
import { Router as CustomRouter } from "@/entities/Router";
import { IModule1Controllers, IModule1Router } from "../types";


export default class Module1Router extends CustomRouter implements IModule1Router {
    controller: IModule1Controllers;

    constructor(controller: IModule1Controllers) {
        super(controller);
    }

    getRouter(): Router {
        return this.router;
    }

    private privateMiddleware(req: Request, res: Response, next: NextFunction) {
        req.body.enabledUser = {
            GET: [],
            POST: [],
            PUT: [],
            DELETE: [],
        }
        next();
    }
}