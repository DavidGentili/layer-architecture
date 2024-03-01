import DBError from "@/exceptions/DBError";
import { Model } from "mongoose";

export async function createDocument<IType, ICreate>(model: Model<IType>, params: ICreate): Promise<IType> {
    try {
        const newDoc = new model(params);
        const res = await newDoc.save();
        const created = await model.findOne({ _id: res._id });
        return created as IType;
    } catch (e: any) {
        console.log(e)
        throw (e && e.id) ? e : new DBError('Error al crear el documento');
    }
}