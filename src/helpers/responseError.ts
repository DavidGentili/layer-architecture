import { IMainException } from "@/exceptions/types";
import { Response } from "express";

/**
 * Se encarga de que la API responda correctamente el mensaje de error
 * @param error el error a comunicar
 * @param res el elemento respuesta de express
 */
export default function (error: IMainException, res: Response) {
    res.status(error.code || 500);
    res.json({ message: error.getMessage() || 'Error interno del servidor', error: error.id || 'API_WRONG_RESPONSE' });
    res.end();
}