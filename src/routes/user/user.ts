import express from 'express';
import registerController from '../../controller/user/registerController';
const router =  express.Router();

router.post('/', registerController);

export default router;
