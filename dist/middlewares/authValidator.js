"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorParams = void 0;
exports.validator = validator;
const express_validator_1 = require("express-validator");
const validatorParams = [
    (0, express_validator_1.check)("email").isEmail().withMessage("It must be a valid email"),
];
exports.validatorParams = validatorParams;
function validator(req, res, next) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
    }
    next();
}
