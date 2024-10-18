import { check, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const changePasswordValidator = [
  check("oldPassword")
    .notEmpty()
    .withMessage("La contraseña antigua es requerida"),
  check("newPassword")
    .isLength({ min: 8 })
    .withMessage("La nueva contraseña  debe tener al menos 8 caracteres")
    .custom((value, { req }) => {
      if (value === req.body.oldPassword) {
        throw new Error(
          "La nueva  contraseña no puede ser igual a la contraseña antigua"
        );
      }
      return true;
    }),
];

const handleValidation = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array(),
    });
  }
  next();
};

export { changePasswordValidator, handleValidation };
