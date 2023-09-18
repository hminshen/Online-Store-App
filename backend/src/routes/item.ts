import Express from 'express';
const router = Express.Router();
import itemController from '../controllers/item'
import { checkIfAdmin, checkIfLoggedInAPI } from '../auth/checkAuth';
import itemValidator from '../validators/itemValidator';
import commonValidator from '../validators/commonValidator';

// Get all items
router.get('/all', itemController.getItems);

// Get item by id
router.get('/:id', commonValidator.idValidation, itemController.getItem);

// Create New Item
router.post('/', checkIfLoggedInAPI, checkIfAdmin, itemValidator.validateCreateItem, itemController.createItem);

// Update item by id
router.patch('/:id', checkIfLoggedInAPI, checkIfAdmin, commonValidator.idValidation, itemValidator.validateCreateItem, itemController.updateItem);

// Delete item by id
router.delete('/:id', checkIfLoggedInAPI, checkIfAdmin, commonValidator.idValidation, itemController.deleteItem);

export default router;
