import Express from 'express';
const router = Express.Router();
import userController from '../controllers/user'
import { checkIfLoggedInAPI, checkIfAdmin } from '../auth/checkAuth';
import commonValidator from '../validators/commonValidator';

router.get("/", checkIfLoggedInAPI, (req, res) => {
    res.status(200).json(req.user);
});
router.get('/all', checkIfLoggedInAPI, checkIfAdmin, userController.getUsers);
router.get('/:id', commonValidator.idValidation, userController.getUser);
router.post('/', userController.createUser);

export default router;
