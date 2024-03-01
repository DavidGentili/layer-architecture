import { IControllers } from "@/types";
import { Router as ExpressRouter } from "express";

export abstract class Router {
    protected readonly controller: IControllers;
    protected router: ExpressRouter;

    constructor(controller: IControllers) {
        this.controller = controller;
        this.router = ExpressRouter();
    }

    getRouter(): ExpressRouter {
        return this.router
    }
}