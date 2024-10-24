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
const updateC_1 = __importDefault(require("../../services/user/candidate/updateC"));
const updateDto_1 = __importDefault(require("../../DTO/updateDto"));
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { tokenEmail, document, name, last_name, address, phone, } = req.body;
        const result = yield updateC_1.default.updateC(new updateDto_1.default(tokenEmail, document, name, last_name, address, phone));
        if (result.success) {
            return res.status(201).json({
                message: result.message,
            });
        }
        else {
            return res.status(400).json({
                message: result.message,
            });
        }
    }
    catch (error) {
        console.error('Error', error.stack);
        return res.status(500).send({
            errorInfo: 'Internal Server Error', error
        });
    }
});
exports.default = update;
