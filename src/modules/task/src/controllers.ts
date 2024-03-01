import { Controller } from "@/entities/Controller";
import { ICreateTask, ITask, ITaskControllers, ITaskJSON, ITaskModel, IUpdateTask } from "../types";
import getFormatQuery from "@/helpers/getFormatQuery";
import { Request, Response } from "express";
import { IPage, IPageable } from "@/types";

export default class Module1Controller extends Controller implements ITaskControllers {

    model: ITaskModel

    constructor(model: ITaskModel) {
        super(model);
    }

    async get(req: Request, res: Response): Promise<void> {

        const query = getFormatQuery(req.query, [
            { key: 'id', type: 'string' },
            { key: 'title', type: 'string' },
            { key: 'color', type: 'string' },
            { key: 'active', type: 'boolean' },
        ])

        const config = getFormatQuery(req.query, [
            { key: 'limit', type: 'number' },
            { key: 'offset', type: 'number' },
            { key: 'sort', type: 'number' }
        ])

        const data = await this.model.get({ ...query }, config);

        res.status(200);
        res.json(data.map(res => res.toJSON()));
    }

    async getPage(req: Request, res: Response): Promise<void> {
        const query = getFormatQuery(req.query, [
            { key: 'id', type: 'string' },
            { key: 'name', type: 'string' },
            { key: 'order', type: 'number' },
            { key: 'active', type: 'boolean' },
        ])

        const config = getFormatQuery(req.query, [
            { key: 'pageSize', type: 'number' },
            { key: 'page', type: 'number' },
            { key: 'sort', type: 'number' },
        ]) as IPageable

        const data = await this.model.getPage({ ...query }, config);

        const JSONData: IPage<ITaskJSON> = { ...data, elements: data.elements.map(elem => elem.toJSON()) }

        res.status(200);
        res.json(JSONData);
    }

    async create(req: Request, res: Response): Promise<void> {
        const { title, description, active, color } = req.body

        const params: ICreateTask = {
            title,
            description,
            active,
            color
        }

        const data = await this.model.create(params);
        res.status(200);
        res.json(data.toJSON());
    }

    async update(req: Request, res: Response): Promise<void> {
        const { taskId, title, description, active, color } = req.body

        const params: IUpdateTask = {
            title,
            description,
            color,
            active
        }

        const data = await this.model.update(taskId, params);
        res.status(200);
        res.json(data.toJSON());
    }

    async delete(req: Request, res: Response): Promise<void> {
        const { taskId } = req.body

        const data = await this.model.delete(taskId);
        res.status(200);
        res.json(data.toJSON());
    }

}