import { Request, NextFunction, Response } from "express";
import { IMainException } from "./types";
import MainException from "./entities/MainException";
import Log from "@/log";

/**
 * Se encarga de traducir un error del sistema a respuestas http
 * @param err error del sistema
 * @param res elemento respuesta de Express
 */
export default function HandlerErrorResponse(err: IMainException, req: Request, res: Response, next: NextFunction) {
    try {
        let error: IMainException | undefined = undefined;
        if (err instanceof MainException)
            error = err;
        else
            error = new MainException({ id: 'API_WRONG_RESPONSE', message: 'Error interno del servidor', error: err as Error });
        Log.getInstance().addError(error);
        responseError(error, res);
    } catch (e: any) {
        Log.getInstance().addError(e);
    }
}

/**
 * Se encarga de que la API responda correctamente el mensaje de error
 * @param error el error a comunicar
 * @param res el elemento respuesta de express
 */
function responseError(error: IMainException, res: Response) {
    res.status(error.code || 500);
    res.json({ message: error.getMessage() || 'Error interno del servidor', error: error.id || 'API_WRONG_RESPONSE' });
    res.end();
}