import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import register from './routes/user/user';
const app =  express().use(bodyParser.json());

dotenv.config();

app.use('/candidate', register);

const PORT = process.env.PORT || 10240;

app.listen(PORT, ( ) => {
    console.log(`Servidor ejecutado en el puerto: ${PORT}`); 
}).on('error', (error) => {
    throw new Error(error.message);
});
