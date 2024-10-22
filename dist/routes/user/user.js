"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const registerValidator_1 = require("../../middlewares/validators/registerValidator");
const validateToken_1 = __importDefault(require("../../middlewares/validateToken"));
const updateValidator_1 = require("../../middlewares/validators/updateValidator");
const registerController_1 = __importDefault(require("../../controller/user/registerController"));
const updateDataCandidate_1 = __importDefault(require("../../controller/user/updateDataCandidate"));
router.post("/register", registerValidator_1.validationParamsRegister, registerValidator_1.validatorRegister, registerController_1.default);
router.put("/update", (0, validateToken_1.default)(['user']), updateValidator_1.validateParametersUpdate, updateValidator_1.validatorUpdate, updateDataCandidate_1.default);
exports.default = router;
