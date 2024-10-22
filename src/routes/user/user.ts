import express from "express";
const router = express.Router();

import {
  validatorRegister,
  validationParamsRegister,
} from "../../middlewares/validators/registerValidator";
import validateToken from "../../middlewares/validateToken";
import {
  validatorUpdate,
  validateParametersUpdate,
} from "../../middlewares/validators/updateValidator";

import registerController from "../../controller/user/registerController";

import updateData from "../../controller/user/updateDataCandidate";

router.post(
  "/register",
  validationParamsRegister,
  validatorRegister,
  registerController
);

router.put(
  "/update",
  validateToken(['user']),
  validateParametersUpdate,
  validatorUpdate,
  updateData
);

export default router;
