export default interface IMainException extends Error{
    id : string
    name : string
    message : string
    code?: number
    error?: string
}
