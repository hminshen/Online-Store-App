import { NextFunction, Request, Response } from 'express';
import UsersService from '../services/userService';
import crypto from 'crypto';

const getUsers = async (req: Request, res: Response) => {
    try{
        const users = await UsersService.getUsers();
        res.json(users)
    } catch(error){
        console.error('Error retrieving users:', error);
        res.status(500).json({ error: 'Could not retrieve users' });
    } 
}
const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try{
        // Generate a random salt
        const salt = crypto.randomBytes(16);

        // Get the user password
        const password = req.body.password;

        // Hash the password with the salt using PBKDF2
        crypto.pbkdf2(password, salt, 100000, 64, 'sha512', async (err, derivedKey) => {
        if (err) throw err;

        const hashedPassword = derivedKey;
            
        const userData = {
            email: req.body.email,
            username: req.body.username,
            name: req.body.name,
            hashed_password: hashedPassword,
            salt: salt,
            role_id: 1, // default to normal user
        };
        const newUser = await UsersService.createUser(userData);
        res.status(200).json(newUser);
        });
    } catch(error){
        console.error('Error creating new user with name:' + error);
        res.status(500).json({ error: 'Could not create new user' });
    }
}

const authController = {
    getUsers,
    createUser
};

export { authController as default };