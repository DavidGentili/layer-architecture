import { Router } from "express";

export default class AppRouter {

    private baseUrl: string;

    constructor(url?: string) {
        this.baseUrl = url || ''
    }

    getVersion1(): Router {
        const app = Router();

        return app
    }
}