import express, { application } from 'express';
import auth from '../middlewares/auth';
const router = express.Router();
import admin from '../middlewares/admin';
import { registerController,dhabaController,loginController, userController, refreshController } from '../controllers';

router.post('/register', registerController.register);

router.post('/login', loginController.login);

router.get('/me', auth, userController.me);

router.post('/refresh', refreshController.refresh);

router.post('/logout', auth, loginController.logout);




router.post('/dhabas', [auth, admin], dhabaController.store);

router.get('/dhabas', dhabaController.index);

router.get('/dhabas/:id', dhabaController.show);

export default router