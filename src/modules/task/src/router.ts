import { Router, Request, Response, NextFunction } from "express";
import { Router as CustomRouter } from "@/entities/Router";
import { ITaskControllers, ITaskRouter } from "../types";


export default class TaskRouter extends CustomRouter implements ITaskRouter {
    controller: ITaskControllers;

    constructor(controller: ITaskControllers) {
        super(controller);
    }

    getRouter(): Router {
        return this.router;
    }

    private privateMiddleware(req: Request, res: Response, next: NextFunction) {
        req.body.enabledUser = {
            GET: [],
            PUT: [],
            DELETE: [],
        }
        next();
    }
}