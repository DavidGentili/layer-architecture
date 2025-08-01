import DBError from "@/exceptions/entities/DBError";
import WrongIdException from "@/exceptions/entities/WrongIdException";
import { HydratedDocument, Model, Types } from "mongoose";

export async function updateDocument<IType, IUpdate>(model: Model<IType>, idDoc: string, params: IUpdate): Promise<HydratedDocument<IType> | null | IType> {
    try {
        const doc = await model.findById(idDoc);
        if (!doc)
            throw new WrongIdException();
        const updateData: any = { ...params };
        return await model.findOneAndUpdate({ _id: new Types.ObjectId(idDoc) }, updateData, { returnDocument: 'after' });
    } catch (e: any) {
        throw (e && e.id) ? e : new DBError('Error al actualizar el documento');
    }
}