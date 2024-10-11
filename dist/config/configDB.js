"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connection = mysql2_1.default.createPool({
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
        return;
    }
    console.log('Conexion exitosa a la base de datos');
});
exports.default = connection.promise();
