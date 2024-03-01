import IMainException from "./MainException";

export default class WrongIdException implements IMainException {
    id = 'WRONG_ID'
    message : string
    name : string = ''
    
    constructor(message : string) {
        this.message = message;
    }
}