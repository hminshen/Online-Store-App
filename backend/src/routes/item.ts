import Express from 'express';
const router = Express.Router();
import itemController from '../controllers/item'
import { checkIfAdmin, checkIfLoggedInAPI } from '../auth/checkAuth';
import itemValidator from '../validators/itemValidator';
import commonValidator from '../validators/commonValidator';

/**
 * @api {get} /items/all Get all items
 * @apiName GetItems
 * @apiGroup Items
 *
 * @apiDescription Retrieve a list of all items.
 *
 * @apiSuccess (200) {Object[]} items List of items.
 * @apiSuccess (200) {String} items.name Item name.
 * @apiSuccess (200) {String} items.description Item description.
 * @apiSuccess (200) {Number} items.price Item price.
 * @apiSuccess (200) {Number} items.quantity Item quantity.
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "name": "Item 1",
 *         "description": "Description 1",
 *         "price": 10.99,
 *         "quantity": 5
 *       },
 *       {
 *         "name": "Item 2",
 *         "description": "Description 2",
 *         "price": 15.99,
 *         "quantity": 10
 *       }
 *     ]
 *
 * @apiError (500) InternalServerError Internal server error.
 */
router.get('/all', itemController.getItems);

/**
 * @api {get} /items/:id Get an item by ID
 * @apiName GetItem
 * @apiGroup Items
 *
 * @apiDescription Retrieve an item by its ID.
 *
 * @apiParam {Number} id Item's unique ID.
 *
 * @apiSuccess (200) {Object} item The requested item.
 * @apiSuccess (200) {String} item.name Item name.
 * @apiSuccess (200) {String} item.description Item description.
 * @apiSuccess (200) {Number} item.price Item price.
 * @apiSuccess (200) {Number} item.quantity Item quantity.
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "name": "Item 1",
 *       "description": "Description 1",
 *       "price": 10.99,
 *       "quantity": 5
 *     }
 *
 * @apiError (404) NotFound Item not found.
 * @apiError (500) InternalServerError Internal server error.
 */
router.get('/:id', commonValidator.idValidation, itemController.getItem);

/**
 * @api {post} /items Create a new item
 * @apiName CreateItem
 * @apiGroup Items
 *
 * @apiDescription Create a new item with the provided data. (User must be logged in and admin)
 *
 * @apiParam (Request Body) {String} name Item name.
 * @apiParam (Request Body) {String} description Item description.
 * @apiParam (Request Body) {Number} price Item price.
 * @apiParam (Request Body) {Number} quantity Item quantity.
 *
 * @apiSuccess (200) {Object} item The newly created item.
 * @apiSuccess (200) {String} item.name Item name.
 * @apiSuccess (200) {String} item.description Item description.
 * @apiSuccess (200) {Number} item.price Item price.
 * @apiSuccess (200) {Number} item.quantity Item quantity.
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "name": "New Item",
 *       "description": "New Item Description",
 *       "price": 19.99,
 *       "quantity": 15
 *     }
 *
 * @apiError (500) InternalServerError Internal server error.
 */
router.post('/', checkIfLoggedInAPI, checkIfAdmin, itemValidator.validateCreateItem, itemController.createItem);

/**
 * @api {patch} /items/:id Update an item by ID
 * @apiName UpdateItem
 * @apiGroup Items
 *
 * @apiDescription Update an item by its ID with the provided data.
 *
 * @apiParam {Number} id Item's unique ID.
 *
 * @apiParam (Request Body) {String} name Item name.
 * @apiParam (Request Body) {String} description Item description.
 * @apiParam (Request Body) {Number} price Item price.
 * @apiParam (Request Body) {Number} quantity Item quantity.
 *
 * @apiSuccess (200) {Object} item The updated item.
 * @apiSuccess (200) {String} item.name Item name.
 * @apiSuccess (200) {String} item.description Item description.
 * @apiSuccess (200) {Number} item.price Item price.
 * @apiSuccess (200) {Number} item.quantity Item quantity.
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "name": "Updated Item",
 *       "description": "Updated Item Description",
 *       "price": 24.99,
 *       "quantity": 20
 *     }
 *
 * @apiError (404) NotFound Item not found.
 * @apiError (500) InternalServerError Internal server error.
 */
router.patch('/:id', checkIfLoggedInAPI, checkIfAdmin, commonValidator.idValidation, itemValidator.validateCreateItem, itemController.updateItem);

/**
 * @api {delete} /items/:id Delete an item by ID
 * @apiName DeleteItem
 * @apiGroup Items
 *
 * @apiDescription Delete an item by its ID.
 *
 * @apiParam {Number} id Item's unique ID.
 *
 * @apiSuccess (200) {String} message Item deleted successfully.
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Item deleted successfully."
 *     }
 *
 * @apiError (404) NotFound Item not found.
 * @apiError (500) InternalServerError Internal server error.
 */
router.delete('/:id', checkIfLoggedInAPI, checkIfAdmin, commonValidator.idValidation, itemController.deleteItem);

export default router;
