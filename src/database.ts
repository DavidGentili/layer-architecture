import mongoose from 'mongoose';
import { databaseURL } from './config';


/**
 * Se realiza la conexión a la base de datos
 */
export const connect = async () => {
    try {
        mongoose.set('strictQuery', false);
        const db = await mongoose.connect(databaseURL)
        const name = `${db.connection.host} - ${db.connection.name}`
        console.log(`Se ha conectado a la base de datos : ${name}`)
        return db;
    } catch (e) {
        console.log(e)
        console.log('No se ha podido conectar con la base de datos, por favor comuniquese con el adminsitrador del sistema')
        return undefined
    }
}
