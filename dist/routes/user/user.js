"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const registerValidator_1 = require("../../middlewares/validators/registerValidator");
const registerController_1 = __importDefault(require("../../controller/user/registerController"));
router.post("/register", registerValidator_1.validationParamsRegister, registerValidator_1.validatorRegister, registerController_1.default);
exports.default = router;
