import Express from 'express';
const router = Express.Router();
import authController from '../controllers/auth'
import passport from 'passport';

// Test route to get users
router.get('/', authController.getUsers);

/**
 * @api {post} /signup Register a new user
 * @apiName RegisterUser
 * @apiGroup Authentication
 *
 * @apiParam (Request Body) {String} email User's email address. Must be unique.
 * @apiParam (Request Body) {String} username User's username. Must be unique.
 * @apiParam (Request Body) {String} password User's password. 
 * @apiParam (Request Body) {String} name User's name.
 *
 * @apiSuccess {Object} user The newly registered user.
 *
 * @apiError {Object} error Error message if registration fails.
 *
 * @apiSuccessExample Success Response:
 * HTTP/1.1 200 OK
 * {
 *   "user": {
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
 * }
 *
 * @apiErrorExample Error Response:
 * HTTP/1.1 500 Internal Server Error
 * {
 *   "error": "Could not create new user: Error message"
 * }
 */
router.post('/signup', authController.createUser);

/**
 * @api {post} /login Log in as a user
 * @apiName LoginUser
 * @apiGroup Authentication
 * 
 * @apiParam (Request Body) {String} username User's username.
 * @apiParam (Request Body) {String} password User's password. 
 *
 * @apiSuccess {String} message Successful login message.
 *
 * @apiError {Object} error Error message if login fails.
 *
 * @apiSuccessExample Success Response:
 * HTTP/1.1 200 OK
 * {
 *   "message": "Success"
 * }
 *
 * @apiErrorExample Error Response:
 * HTTP/1.1 500 Internal Server Error
 * {
 *   "error": "Login failed: Error message"
 * }
 */

router.post('/login', passport.authenticate('local', {
    failureRedirect: '/login'
  }), (req, res) => {
    return res.status(200).json("success");
  });


/**
 * @api {get} /logout Log out a user
 * @apiName LogoutUser
 * @apiGroup Authentication
 *
 * @apiSuccess {String} message Successful logout message.
 *
 * @apiError {Object} error Error message if logout fails.
 *
 * @apiSuccessExample Success Response:
 * HTTP/1.1 200 OK
 * {
 *   "message": "Logout successful"
 * }
 *
 * @apiErrorExample Error Response:
 * HTTP/1.1 400 Bad Request
 * {
 *   "error": "You are not logged in"
 * }
 * HTTP/1.1 500 Internal Server Error
 * {
 *   "error": "Logout failed: Error message"
 * }
 */
router.get('/logout', (req, res) => {
    if (req.user === undefined){
        return res.status(400).json({ errormsg: "you are not logged in" });
    }
    req.logout(function(err) {
        if (err) { return res.status(500).json({ errormsg: err }); }
        return res.status(200).json("success");
    });
});

export default router;
