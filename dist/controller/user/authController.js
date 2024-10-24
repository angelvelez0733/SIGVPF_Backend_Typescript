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
const authService_1 = __importDefault(require("../../services/authService"));
const auth_1 = __importDefault(require("../../DTO/auth"));
const auth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const token = yield authService_1.default.auth(new auth_1.default(email, password));
        if (token) {
            return res.status(200).json({
                status: "Successful authentication",
                Access: token,
            });
        }
        // Si no hay token, devolvemos 401
        return res.status(401).json({
            status: "Invalid email or password",
        });
    }
    catch (error) {
        // Si ocurre un error, devolvemos 500
        return res.status(500).send({
            error: "Internal Server error",
            errorInfo: error.message,
        });
    }
});
exports.default = auth;
