export interface IMainException extends Error {
    id: string
    name: string
    message: string
    code?: number

    getMessage(locale?: string): string
    getCode(): number
}


export interface IMainExceptionConstructor {
    id?: string,
    name?: string,
    message?: string,
    error?: Error,
    code?: number
}
