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
const updateData_1 = __importDefault(require("../../../repository/user/updateData"));
class candidate {
    static updateC(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield updateData_1.default.update(user);
                if (result && result[0] && result[0]['message'] === 'Usuario actualizado exitosamente') {
                    console.error('No record was updated. Verify that email is correct.', result.message);
                }
                return { success: true, message: 'successful Update' };
            }
            catch (error) {
                console.error('Error updating  user:', error.message);
                return { success: false, message: error.message };
            }
        });
    }
}
exports.default = candidate;
