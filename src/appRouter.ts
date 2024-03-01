import { Router } from "express";
import Task from "./modules/task";

export default class AppRouter {

    constructor() {

    }

    getVersion1(): Router {
        const app = Router();

        app.use(Task.getRouter())
        return app
    }
}