import  IMainException from "./MainException";

export default class APIWrongResponse implements IMainException {
    id = 'API_WRONG_RESPONSE'
    name : string = ''
    message : string
    code : number
    error : string

    constructor(code : number, message : string, error ?: string){
        this.code = code;
        this.message = message;
        this.error = error || this.id;
    }

    getRespose(this : APIWrongResponse){
        const code = this.code;
        const message = this.message;
        return {code, message}
    }
}