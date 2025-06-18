import mongoose, { Mongoose } from 'mongoose';
import { databaseURL } from './config';
import DBError from './exceptions/entities/DBError';
import Log from './log';


/**
 * Se realiza la conexión a la base de datos
 */
export async function connect(): Promise<Mongoose | undefined> {
    try {
        mongoose.set('strictQuery', false);
        const db = await mongoose.connect(databaseURL)
        const name = `${db.connection.host} - ${db.connection.name}`
        console.log(`Se ha conectado a la base de datos : ${name}`)
        return db;
    } catch (e: any) {
        Log.getInstance().addError(e);
        Log.getInstance().addError(new DBError('No se ha podido conectar con la base de datos, por favor comuniquese con el adminsitrador del sistema'));
        return undefined
    }
}
