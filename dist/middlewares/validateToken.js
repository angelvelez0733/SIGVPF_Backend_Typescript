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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const validateToken = (allowedRoles) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            //Formato bearer esperado del token
            const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
            if (!token) {
                return res.status(401).json({
                    status: 'You dont send token'
                });
            }
            const decoded = jsonwebtoken_1.default.verify(token, process.env.SECRET);
            const userRole = decoded.data.role;
            console.log(userRole);
            if (!allowedRoles.includes(userRole)) {
                return res.status(403).json({
                    status: 'Access denied'
                });
            }
            req.body.tokenEmail = decoded.data.email;
            req.body.tokenRole = decoded.data.role;
            console.log(decoded);
            return next();
        }
        catch (error) {
            console.error('Error', error.stack);
            return res.status(403).json({
                status: 'Invalid Token',
                error: error.message
            });
        }
        ;
    });
};
exports.default = validateToken;
