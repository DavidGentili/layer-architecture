import IMainException from "./MainException";

export default class ModelError implements IMainException {
    id = 'MODEL_ERROR'
    name : string = ''
    message : string

    constructor(message : string){
        this.message = message
    }
}