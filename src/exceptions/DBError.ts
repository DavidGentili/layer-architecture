import IMainException from "./MainException";

export default class DBError implements IMainException{
    id = 'DB_ERROR'
    message : string 
    name : string = ''

    constructor(message : string, ){
        this.message = message;
    }

    static getId(){
        return 'DB_ERROR'
    }   

}