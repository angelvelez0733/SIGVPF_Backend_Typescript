import { check, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const validateParametersUpdate = [
  check("name")
    .isLength({ min: 3, max: 50 })
    .withMessage("Name must be between 3 and 50 characters")
    .toLowerCase()
    .optional(),

  check("last_name")
    .isLength({ min: 3, max: 50 })
    .withMessage("Last name must be between 3 and 50 characters")
    .toLowerCase()
    .optional(),
  check("phone")
    .isLength({ min: 10, max: 10 })
    .withMessage("Phone must be 10 characters")
    .matches(/^\d+$/)
    .withMessage("El telefono debe tener solo numeros")
    .optional(),
];

function validatorUpdate(req: Request, res:Response,  next: NextFunction): any {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array(),
        });
    }
    next();
}
export { validateParametersUpdate, validatorUpdate };