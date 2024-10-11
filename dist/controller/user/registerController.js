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
const userDto_1 = __importDefault(require("../../DTO/userDto"));
const userService_1 = __importDefault(require("../../services/user/userService"));
let register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { document, name, last_name, address, email, password, phone } = req.body;
        const result = yield userService_1.default.register(new userDto_1.default(document, name, last_name, address, email, password, phone));
        return res.status(201).json({
            status: 'register ok',
        });
    }
    catch (error) {
        console.error('error en el controlador', error.stack);
        throw error;
    }
});
exports.default = register;