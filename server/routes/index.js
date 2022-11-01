import express from 'express';
import auth from '../middlewares/auth';
const router = express.Router();
import admin from '../middlewares/admin';
import { registerController,loginController, userController, refreshController, reservationController } from '../controllers';
import dhabaController from "../controllers/dhabaController.js";


router.post('/register', registerController.register);

router.post('/login', loginController.login);

router.get('/me', auth, userController.me);

router.post('/refresh', refreshController.refresh);

router.post('/logout', auth, loginController.logout);




router.post('/dhabas', [auth, admin], dhabaController.store);

router.put('/dhabas/:id', [auth, admin], dhabaController.update);

router.get('/dhabas', dhabaController.index);

router.get('/dhabas/:id', dhabaController.show);

router.delete('/dhabas/:id',[auth, admin], dhabaController.destroy);

router.post('/reservations/add', reservationController.add);

router.get('/reservations', reservationController.index);

router.get('/reservations/:id', reservationController.show);

export default router;