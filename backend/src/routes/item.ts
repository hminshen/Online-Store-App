import Express from 'express';
const router = Express.Router();
import itemController from '../controllers/item'
import { checkIfLoggedInAPI } from '../auth/checkAuth';

// Get all items
router.get('/all', itemController.getItems);

// Get item by id
router.get('/:id', itemController.getItem);

// Create New Item
router.post('/', itemController.createItem);

// Update item by id
router.patch('/:id', itemController.updateItem);

// Delete item by id
router.delete('/:id', itemController.deleteItem);

export default router;
