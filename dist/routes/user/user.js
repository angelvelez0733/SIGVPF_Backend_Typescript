"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const registerController_1 = __importDefault(require("../../controller/user/registerController"));
const router = express_1.default.Router();
router.post('/register', registerController_1.default);
exports.default = router;
