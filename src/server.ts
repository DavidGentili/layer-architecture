import 'express-async-errors'
import handlerErrorResponse from './exceptions';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { port } from './config';
import { version, name } from '../package.json'
import AppRouter from './appRouter';
import { limitRateMiddleware } from './middlewares/rateLimit';



const app = express();

//Middlewares
app.use(cors()); // Se establece la politica de CORS
app.use(bodyParser.json()); //Se parsea el cuerpo de la peticion
app.use(limitRateMiddleware);

//Routes
const router = new AppRouter();
app.use('/', router.getVersion1())


/**
 * Se setea el puerto dentro de la app de express
 */
app.set('port', port);


/**
 * Se define un mensaje para la ruta raiz de la API
 */
app.get('/', async (req, res) => {
    res.json({ message: `Bienvenido a la aplicacion de servidor: ${name} - Version ${version}` })
})

app.use(handlerErrorResponse);

/**
 * Se ejecuta la API En el puerto indicado
 */
app.listen(app.get('port'), () => {
    console.log(`La aplicacion se encuentra en funcionamiento en el puerto ${app.get('port')} - Version ${version}`)
})
