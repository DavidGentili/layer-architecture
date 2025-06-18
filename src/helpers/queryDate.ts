import { IQueryDate } from "@/types";


export function parseStringtoQueryDate(date?: string): IQueryDate | undefined {
    if (!date)
        return undefined;
    const query: IQueryDate = {};
    query.$lte = internalDateParse(date, 'lte:')?.toISOString();
    query.$gte = internalDateParse(date, 'gte:')?.toISOString();
    if (query.$lte === undefined)
        delete query.$lte;
    if (query.$gte === undefined)
        delete query.$gte;
    if (query.$gte !== undefined || query.$lte !== undefined)
        return query;
    return undefined;
}

function internalDateParse(date: string, path: string): Date | undefined {
    const payload = date.split(',').find(date => date.includes(path));
    if (!payload)
        return undefined;
    const stringDate = payload.split(path).at(1)?.replace(/"/g, '');
    if (!stringDate)
        return undefined;
    return new Date(stringDate);
}