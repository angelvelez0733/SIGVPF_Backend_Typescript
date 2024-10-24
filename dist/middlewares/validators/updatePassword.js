"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleValidation = exports.changePasswordValidator = void 0;
const express_validator_1 = require("express-validator");
const changePasswordValidator = [
    (0, express_validator_1.check)("oldPassword")
        .notEmpty()
        .withMessage("La contraseña antigua es requerida"),
    (0, express_validator_1.check)("newPassword")
        .isLength({ min: 8 })
        .withMessage("La nueva contraseña  debe tener al menos 8 caracteres")
        .custom((value, { req }) => {
        if (value === req.body.oldPassword) {
            throw new Error("La nueva  contraseña no puede ser igual a la contraseña antigua");
        }
        return true;
    }),
];
exports.changePasswordValidator = changePasswordValidator;
const handleValidation = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array(),
        });
    }
    next();
};
exports.handleValidation = handleValidation;
