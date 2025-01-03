"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configDB_1 = __importDefault(require("../../../config/configDB"));
class RegisterService {
    static register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Ejecutar la función MySQL y obtener el resultado
                const [result] = yield configDB_1.default.query('SELECT register_user(?, ?, ?, ?, ?, ?, ?) AS message', [
                    user.document,
                    user.name,
                    user.last_name,
                    user.address,
                    user.email,
                    user.password,
                    user.phone
                ]);
                // El resultado debería ser un array con un objeto que contiene la propiedad message
                if (Array.isArray(result) && result.length > 0) {
                    return result[0];
                }
                throw new Error('No se recibió una respuesta válida del procedimiento almacenado');
            }
            catch (error) {
                // Manejar el error y propagar un mensaje más descriptivo
                throw new Error(`Error al registrar usuario: ${error.message}`);
            }
        });
    }
}
exports.default = RegisterService;
