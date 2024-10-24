"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_1 = __importDefault(require("./routes/user/user"));
const app = (0, express_1.default)().use(body_parser_1.default.json());
dotenv_1.default.config();
app.use('/candidate', user_1.default);
const PORT = process.env.PORT || 10240;
app.listen(PORT, () => {
    console.log(`Servidor ejecutado en el puerto: ${PORT}`);
}).on('error', (error) => {
    throw new Error(error.message);
});
