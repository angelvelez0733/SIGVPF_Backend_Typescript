"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = __importDefault(require("../controller/user/authController"));
const authValidator_1 = require("../middlewares/authValidator");
const router = express_1.default.Router();
router.post('/', authValidator_1.validatorParams, authValidator_1.validator, authController_1.default);
exports.default = router;
