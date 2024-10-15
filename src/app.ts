import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import register from './routes/user/user';
import auth from './routes/auth';
const app =  express().use(bodyParser.json());

dotenv.config();

app.use('/register', register);
app.use('/auth', auth);

const PORT = process.env.PORT || 10240;

app.listen(PORT, ( ) => {
    console.log(`Servidor ejecutado en el puerto: ${PORT}`); 
}).on('error', (error) => {
    throw new Error(error.message);
});
