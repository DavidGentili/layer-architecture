import { Request, NextFunction, Response } from "express";
import responseError from "../helpers/responseError";
import APIWrongResponse from "./APIWrongResponse";
import IMainException from "./MainException";


/**
 * Tipo utilizado para el indice
 */
interface IErrorIndex {
    [key: string]: (e: any) => APIWrongResponse;
}

/**
 * Indice que contiene las conversiones entre los errores
 */
const errorIndex: IErrorIndex = {
    "ID_NOT_FOUNT": (e: any) => new APIWrongResponse(400, e.message || 'No se pudo encontrar el id ingresado', e.id),
    "DB_ERROR": (e: any) => new APIWrongResponse(500, 'Error interno del servidor', e.id),
    "MODEL_ERROR": (e: any) => new APIWrongResponse(500, 'Error interno del servidor', e.id),
    "WRONG_ID": (e: any) => new APIWrongResponse(400, e.message || 'El id ingresado es incorrecto', e.id),
    "WRONG_PARAMS": (e: any) => new APIWrongResponse(400, e.message || 'Los parametros ingresados son incorrectos', e.id),

}

/**
 * Se encarga de traducir un error del sistema a respuestas http
 * @param err error del sistema
 * @param res elemento respuesta de Express
 */
export default function handlerErrorResponse(err: IMainException, req: Request, res: Response, next: NextFunction) {
    try {
        const id = err.id
        let error = undefined;
        if (id) {
            if (id != 'API_WRONG_RESPONSE') {
                const index = errorIndex[id];
                if (index)
                    error = index(err);
                else
                    error = new APIWrongResponse(500, 'Error interno del servidor',);
            } else
                error = err;
        } else
            error = new APIWrongResponse(500, 'Error interno del servidor');
        console.error(err);
        responseError(error, res);
    } catch (e) {
        console.log(e)
    }


}