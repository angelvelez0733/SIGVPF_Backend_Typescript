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
const generateToken_1 = __importDefault(require("../helpers/generateToken"));
const compareHash_1 = __importDefault(require("../helpers/compareHash"));
const authRepository_1 = __importDefault(require("../repository/user/candidates/authRepository"));
class AuthService {
    static auth(auth) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const candidateResult = yield authRepository_1.default.authCandidate(auth.$email);
                const roles = [{ result: candidateResult, role: "Candidate" }];
                for (const { result, role } of roles) {
                    if (result.length > 0) {
                        const isPasswordValid = yield (0, compareHash_1.default)(auth.$password, result[0].password);
                        if (isPasswordValid) {
                            const token = (0, generateToken_1.default)({ email: auth.$email, role: role }, process.env.SECRET, 60);
                            return token;
                        }
                    }
                }
                return null;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error('An error ocurred, error information: ' + error.message);
                }
            }
        });
    }
}
exports.default = AuthService;
