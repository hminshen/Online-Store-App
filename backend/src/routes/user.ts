import Express from 'express';
const router = Express.Router();
import userController from '../controllers/user'
import { checkIfLoggedInAPI } from '../auth/checkAuth';

router.get("/", checkIfLoggedInAPI, (req, res) => {
    res.status(200).json(req.user);
});
router.get('/all', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/', userController.createUser);

export default router;
