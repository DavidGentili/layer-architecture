import { Router } from "express";
import Task from "./modules/task";

export default class AppRouter {

    private baseUrl: string;

    constructor(url?: string) {
        this.baseUrl = url || ''
    }

    getVersion1(): Router {
        const app = Router();

        app.use(`${this.baseUrl}/`, Task.getRouter())
        return app
    }
}