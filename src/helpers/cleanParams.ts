import { IQueryParams } from "@/types";

export default function clearParams(object: IQueryParams, keys: Array<string>) {
    keys.forEach(key => {
        if (object[key] === undefined)
            delete object[key];
    })
}