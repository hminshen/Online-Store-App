import Express from 'express';
const router = Express.Router();
import authController from '../controllers/auth'

router.get('/', authController.getUsers);
router.post('/login', authController.createUser);

export default router;
