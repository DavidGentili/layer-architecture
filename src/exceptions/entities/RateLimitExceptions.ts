import { LOCALE } from "@/enums";
import { IMainException } from "../types";
import MainException from "./MainException";


export default class RateLimitException extends MainException implements IMainException {

    id: string = 'RATE_LIMIT_ERROR'
    code = 429

    protected messages: Record<LOCALE, string> = {
        [LOCALE.ES]: 'Demasiadas peticiones en el servidor',
        [LOCALE.PT]: 'Demasiadas petições no servidor',
        [LOCALE.EN]: 'Too many requests',
    }

    constructor(message?: string, error?: Error) {
        super({message, error});
    }
}