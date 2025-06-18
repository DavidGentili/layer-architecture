import { LOCALE } from "@/enums";
import { IMainException } from "../types";
import MainException from "./MainException";

export default class ModelError extends MainException implements IMainException {
    id = 'MODEL_ERROR'
    name : string = ''
    message : string
    code = 500

    protected messages: Record<LOCALE, string> = {
        [LOCALE.ES]: 'Error en el modelo',
        [LOCALE.PT]: 'Erro no modelo',
        [LOCALE.EN]: 'Model error',
    }

    constructor(message?: string, error?: Error){
        super({id: 'MODEL_ERROR', message, error, code: 500})
    }
}