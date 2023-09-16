import Express from 'express';
const router = Express.Router();
import authController from '../controllers/auth'
import passport from 'passport';

// Test route to get users
router.get('/', authController.getUsers);

// Sign Up route:
router.post('/signup', authController.createUser);

// Login route:
router.post('/login', passport.authenticate('local', {
    failureRedirect: '/login'
  }), (req, res) => {
    return res.status(200).json("success");
  });

// Logout route:
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
