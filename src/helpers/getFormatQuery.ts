import { IQueryParams, IQueryFormat } from "@/types";

/**
 * Entendiendo que todas las querys ingresan en formato text, se parsea la informacion
 * en el tipo indicado
 * @param query Parametros de busqueda de la peticion
 * @param keys arreglo con parametros permitidos y sus tipos
 * @returns objeto con las queries formateadas
 */
export default function getFormatQuery(query: any, keys : Array<IQueryFormat>) {
    const aux : IQueryParams = {}
    keys.forEach(({ key, type }) => {
        if(key && query[key])
            aux[key] = getQueryValue(query[key], type)
    })
    return aux
}

/**
 * Retorna el valor en el formato indicado
 * @param value 
 * @param type 
 * @returns 
 */
function getQueryValue(value : any, type : string) {
    if(type === 'string') return new String(value).toString() as string;
    if(type === 'number') return Number.parseInt(value) as number;
    if(type === 'boolean') return value === 'true' ? true : false as boolean
    if(type === 'date') return new Date(value) as Date;
    return value as any;
}