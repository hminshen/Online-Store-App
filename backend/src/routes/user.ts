import Express from 'express';
const router = Express.Router();
import userController from '../controllers/user'

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/', userController.createUser);

export default router;
