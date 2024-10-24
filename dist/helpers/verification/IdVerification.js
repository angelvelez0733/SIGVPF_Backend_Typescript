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
const configDB_1 = __importDefault(require("../../config/configDB"));
const idVerification = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const sqlUser = "SELECT * FROM users WHERE document = (?)";
    const sqlAdmin = "SELECT * FROM administrator  WHERE document_admin = (?)";
    const values = [id];
    try {
        try {
            const [responseUser] = yield configDB_1.default.query(sqlUser, values);
            const [responseAdmin] = yield configDB_1.default.query(sqlAdmin, values);
            const isUserExists = responseUser.length > 0;
            const isAdminExists = responseAdmin.length > 0;
            return isUserExists || isAdminExists;
        }
        catch (error) {
            console.error("Error en las consultas", error.stack);
            throw error;
        }
    }
    catch (error) {
        console.error("Error executing query", error.stack);
        throw error;
    }
});
exports.default = idVerification;
