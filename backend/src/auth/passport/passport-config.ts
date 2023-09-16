import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';
import { SessionUser } from '../../models/user.model';
import UserService from '../../services/userService';
import crypto from 'crypto';


passport.use(new LocalStrategy(async function verify(username, password, cb) {
    try{
        const user = await UserService.getUserByName(username);
        if(!user){
            return cb(null, false, { message: 'Incorrect username or password.' });
        }
        const salt = user.salt;
    
        crypto.pbkdf2(password, salt, 100000, 64, 'sha512', function(err, hashedPassword) {
        if (err) { return cb(err); }
        if (!crypto.timingSafeEqual(user.hashed_password, hashedPassword)) {
            return cb(null, false, { message: 'Incorrect username or password.' });
        }
        return cb(null, user);
        });
    }
    catch(error){
        return cb(error);
    }
  }));

  passport.serializeUser(function(user : SessionUser, cb) {
    process.nextTick(function() {
      cb(null, { id: user.id, username: user.username, role_id: user.role_id});
    });
  });
  
  passport.deserializeUser(function(user : SessionUser, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });

  export default passport;