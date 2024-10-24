"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateParametersUpdate = void 0;
exports.validatorUpdate = validatorUpdate;
const express_validator_1 = require("express-validator");
const validateParametersUpdate = [
    (0, express_validator_1.check)("name")
        .isLength({ min: 3, max: 50 })
        .withMessage("Name must be between 3 and 50 characters")
        .toLowerCase()
        .optional(),
    (0, express_validator_1.check)("last_name")
        .isLength({ min: 3, max: 50 })
        .withMessage("Last name must be between 3 and 50 characters")
        .toLowerCase()
        .optional(),
    (0, express_validator_1.check)("phone")
        .isLength({ min: 10, max: 10 })
        .withMessage("Phone must be 10 characters")
        .matches(/^\d+$/)
        .withMessage("El telefono debe tener solo numeros")
        .optional(),
];
exports.validateParametersUpdate = validateParametersUpdate;
function validatorUpdate(req, res, next) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array(),
        });
    }
    next();
}
