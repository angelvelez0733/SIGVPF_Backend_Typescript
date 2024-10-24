import express from "express";
const router = express.Router();

import {
  validatorRegister,
  validationParamsRegister,
} from "../../middlewares/validators/registerValidator";
import registerController from "../../controller/user/registerController";

router.post("/register", validationParamsRegister, validatorRegister, registerController);

export default router;
