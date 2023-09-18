import Express from 'express';
const router = Express.Router();
import userController from '../controllers/user'
import { checkIfLoggedInAPI, checkIfAdmin } from '../auth/checkAuth';
import commonValidator from '../validators/commonValidator';

/**
 * @api {get} /users Get the current user
 * @apiName GetCurrentUSer
 * @apiGroup Users
 *
 * @apiDescription Get the current authenticated user.
 *
 * @apiSuccess (200) {Object} user The current user.
 * @apiSuccess (200) {Number} user.id User's id.
 * @apiSuccess (200) {String} user.username User's username.
 * @apiSuccess (200) {Number} user.role_id User's role id.
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "username": "exampleUser",
 *       "role_id": "1"
 *     }
 *
 * @apiError (401) Unauthorized. User not authenticated/logged in.
 */
router.get("/", checkIfLoggedInAPI, (req, res) => {
    res.status(200).json(req.user);
});

/**
 * @api {get} /users/all Get all users
 * @apiName GetUsers
 * @apiGroup Users
 *
 * @apiDescription Get a list of all users.
 *
 * @apiSuccess (200) {Object[]} users List of users.
 * @apiSuccess (200) {Number} user.id User's id.
 * @apiSuccess (200) {String} user.email User's email.
 * @apiSuccess (200) {String} user.username User's username.
 * @apiSuccess (200) {String} user.name User's name.
 * @apiSuccess (200) {Bytes} user.hashed_password User's Password (Hashed).
 * @apiSuccess (200) {Bytes} user.salt User's Salt (Hashed).
 * @apiSuccess (200) {Number} user.role_id User's role id.
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *          "id": 1,
 *          "email": "test@gmail.com",
 *          "username": "john",
 *          "name": "john doe",
 *          "hashed_password": {
 *              "type": "Buffer",
 *              "data": [
 *                  11,
 *                  225,
 *                  ...
 *              ]
 *          },
 *          "salt": {
 *              "type": "Buffer",
 *              "data": [
 *                  113,
 *                  ...
 *              ]
 *          },
 *          "role_id": 2
 *       },
 *       {
 *         "id": 2,
 *         "email": "test2@gmail.com",
 *         "username": "jack",
 *         "name": "jack ray",
 *         "hashed_password": {
 *              "type": "Buffer",
 *              "data": [
 *                  14,
 *                  100,
 *                  ...
 *              ]
 *          },
 *          "salt": {
 *              "type": "Buffer",
 *              "data": [
 *                  89,
 *                  ...
 *              ]
 *          },
 *          "role_id": 1
 *       },
 *     ]
 *
 */
router.get('/all', checkIfLoggedInAPI, checkIfAdmin, userController.getUsers);

/**
 * @api {get} /users/:id Get user by ID
 * @apiName GetUserById
 * @apiGroup Users
 *
 * @apiDescription Get a user by their ID.
 *
 * @apiParam {Number} id User's unique ID.
 *
 * @apiSuccess (200) {Object} user The requested user.
 * @apiSuccess (200) {Number} user.id User's id.
 * @apiSuccess (200) {String} user.email User's email.
 * @apiSuccess (200) {String} user.username User's username.
 * @apiSuccess (200) {String} user.name User's name.
 * @apiSuccess (200) {Bytes} user.hashed_password User's Password (Hashed).
 * @apiSuccess (200) {Bytes} user.salt User's Salt (Hashed).
 * @apiSuccess (200) {Number} user.role_id User's role id.
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *       {
 *         "id": 2,
 *         "email": "test2@gmail.com",
 *         "username": "jack",
 *         "name": "jack ray",
 *         "hashed_password": {
 *              "type": "Buffer",
 *              "data": [
 *                  14,
 *                  100,
 *                  ...
 *              ]
 *          },
 *          "salt": {
 *              "type": "Buffer",
 *              "data": [
 *                  89,
 *                  ...
 *              ]
 *          },
 *          "role_id": 1
 *       }
 *
 * @apiError (404) Not Found User not found.
 */
router.get('/:id', commonValidator.idValidation, userController.getUser);

/**
 * @api {post} /users Create User
 * @apiName CreateUser
 * @apiGroup Users
 *
 * @apiDescription Create a new user with the provided data.
 *
 * @apiParam (Request Body) {String} username User's username. Must be unique
 * @apiParam (Request Body) {String} name User's name.
 * @apiParam (Request Body) {String} email User's email. Must be unique
 * @apiParam (Request Body) {String} password User's password.
 *
 * @apiSuccess (200) {Object} user The newly created user.
 * @apiSuccess (200) {Number} user.id User's id.
 * @apiSuccess (200) {String} user.email User's email.
 * @apiSuccess (200) {String} user.username User's username.
 * @apiSuccess (200) {String} user.name User's name.
 * @apiSuccess (200) {Bytes} user.hashed_password User's Password (Hashed).
 * @apiSuccess (200) {Bytes} user.salt User's Salt (Hashed).
 * @apiSuccess (200) {Number} user.role_id User's role id.
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *       {
 *         "id": 2,
 *         "email": "test2@gmail.com",
 *         "username": "jack",
 *         "name": "jack ray",
 *         "hashed_password": {
 *              "type": "Buffer",
 *              "data": [
 *                  14,
 *                  100,
 *                  ...
 *              ]
 *          },
 *          "salt": {
 *              "type": "Buffer",
 *              "data": [
 *                  89,
 *                  ...
 *              ]
 *          },
 *          "role_id": 1
 *       }
 *
 * @apiError (500) InternalServerError Could not create a new user.
 */
router.post('/', userController.createUser);

export default router;
