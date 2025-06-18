import { LOCALE } from "@/enums";
import { IMainException } from "../types";
import MainException from "./MainException";

export default class WrongIdException extends MainException implements IMainException {
    id = 'WRONG_ID'
    code = 400

    protected messages: Record<LOCALE, string> = {
        [LOCALE.ES]: 'El id ingresado es incorrecto',
        [LOCALE.PT]: 'O id inserido é incorreto',
        [LOCALE.EN]: 'The id entered is incorrect',
    }

    constructor(message?: string, error?: Error) {
        super({ id: 'WRONG_ID', message, error, code: 400 })
    }
}