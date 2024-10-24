"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationParamsRegister = void 0;
exports.validatorRegister = validatorRegister;
const express_validator_1 = require("express-validator");
const validationParamsRegister = [
    (0, express_validator_1.check)("email").isEmail().withMessage("Se debe ingresar un email valido"),
    (0, express_validator_1.check)("password")
        .isLength({ min: 8, max: 20 })
        .withMessage("La contraseña debe tener entre 8 y 20 caracteres")
        .matches(/(?=.*[a-z])/)
        .withMessage("La contraseña debe contener al menos una letra minuscula")
        .matches(/(?=.*[A-Z])/)
        .withMessage("La contraseña debe contener al menos una letra mayuscula")
        .matches(/(?=.*\W)/)
        .withMessage("La contraseña debe contener al menos un caracter especial"),
    (0, express_validator_1.check)("name")
        .isLength({ min: 3, max: 50 })
        .withMessage("El nombre debe contener minimo 3 y maximo 50 caracteres")
        .toLowerCase(),
    (0, express_validator_1.check)("last_name")
        .isLength({ min: 3, max: 8 })
        .withMessage("El apellido debe contener minimo 3 y maximo 50 caracteres")
        .toLowerCase(),
    (0, express_validator_1.check)("phone")
        .isLength({ min: 10, max: 10 })
        .withMessage("El telefono debe contener 10 caracteres"),
];
exports.validationParamsRegister = validationParamsRegister;
function validatorRegister(req, res, next) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
    }
    next();
}
