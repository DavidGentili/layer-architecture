import DBError from "@/exceptions/DBError";
import WrongIdException from "@/exceptions/WrongIdException";
import { HydratedDocument, Model, Document, Types } from "mongoose";

export async function deleteDocument<IType>(model: Model<IType>, idDoc: string): Promise<HydratedDocument<IType> | null | IType> {
    try {
        const doc = await model.findById(idDoc);
        if (!doc)
            throw new WrongIdException('El id ingresado no corresponde con ningun elemento');
        return await model.findOneAndDelete({ _id: new Types.ObjectId(idDoc) })
    } catch (e: any) {
        throw (e && e.id) ? e : new DBError('Error al actualizar el documento');
    }
}