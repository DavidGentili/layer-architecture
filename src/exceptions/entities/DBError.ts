import { LOCALE } from "@/enums";
import { IMainException } from "../types";
import MainException from "./MainException";


export default class DBError extends MainException implements IMainException {

    code = 500

    protected messages: Record<LOCALE, string> = {
        [LOCALE.ES]: 'Error interno del servidor en el acceso a los datos',
        [LOCALE.PT]: 'Erro interno do servidor na acesso aos dados',
        [LOCALE.EN]: 'Internal server error in data access',
    }

    constructor(message?: string, error?: Error) {
        super({ id: 'DB_ERROR', error, code: 500, message });
    }
}