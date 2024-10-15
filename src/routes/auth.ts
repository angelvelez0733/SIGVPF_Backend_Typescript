import express from 'express';
import auth from '../controller/user/authController';
import { validatorParams, validator } from '../middlewares/authValidator';

const router = express.Router();

router.post('/', validatorParams, validator, auth);

export default router;