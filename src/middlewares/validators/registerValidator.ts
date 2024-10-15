import { check, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const validationParamsRegister = [
  check("email").isEmail().withMessage("Se debe ingresar un email valido"),
  check("password")
    .isLength({ min: 8, max: 20 })
    .withMessage("La contraseña debe tener entre 8 y 20 caracteres")
    .matches(/(?=.*[a-z])/)
    .withMessage("La contraseña debe contener al menos una letra minuscula")
    .matches(/(?=.*[A-Z])/)
    .withMessage("La contraseña debe contener al menos una letra mayuscula")
    .matches(/(?=.*\W)/)
    .withMessage("La contraseña debe contener al menos un caracter especial"),
  check("name")
    .isLength({ min: 3, max: 50 })
    .withMessage("El nombre debe contener minimo 3 y maximo 50 caracteres")
    .toLowerCase(),
  check("last_name")
    .isLength({ min: 3, max: 8 })
    .withMessage("El apellido debe contener minimo 3 y maximo 50 caracteres")
    .toLowerCase(),
  check("phone")
    .isLength({ min: 10, max: 10 })
    .withMessage("El telefono debe contener 10 caracteres"),
];

function validatorRegister(req: Request, res: Response, next: NextFunction): void {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  next();
}
export { validationParamsRegister, validatorRegister };