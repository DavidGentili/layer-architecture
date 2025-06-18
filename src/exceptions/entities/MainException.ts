import { IMainException, IMainExceptionConstructor } from "../types";
import { LOCALE } from "@/enums";

export default class MainException extends Error implements IMainException {
    id: string
    name: string
    code?: number

    protected messages: Record<LOCALE, string> = {
        [LOCALE.ES]: 'Error interno del servidor',
        [LOCALE.PT]: 'Erro interno do servidor',
        [LOCALE.EN]: 'Internal server error',
    }

    constructor(params: IMainExceptionConstructor) {
        super(params.message);
        this.id = params.id || 'MAIN_EXCEPTION';
        this.name = params.name || this.id;
        this.code = params.code;
        this.stack = params.error?.stack;
    }

    getMessage(locale: string = LOCALE.ES): string {
        return this.messages[locale as keyof typeof this.messages] || this.messages.ES;
    }

    getCode(): number {
        return this.code || 500;
    }

}