import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    queueLimit: 0,
    connectionLimit: 10
});

connection.getConnection((err, conn) => {
    if (err) {
        console.log('Error de conexion a labase de datos');
        if (conn) {
            conn.release();
        }
        return
    }
    console.log('Conexion exitosa a la base de datos');
});

export default connection.promise();