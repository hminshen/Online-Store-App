import { NextFunction, Request, Response } from 'express';
import UsersService from '../services/userService';

const getUsers = async (req: Request, res: Response) => {
    try{
        const users = await UsersService.getUsers();
        res.json(users)
    } catch(error){
        console.error('Error retrieving users:', error);
        res.status(500).json({ error: 'Could not retrieve users' });
    } 
}

const getUser = async (req: Request, res: Response) => {
    try{
        const userId: number = Number(req.params.id);
        const user = await UsersService.getUser(userId);
        res.json(user);
    } catch(error){
        console.error('Error retrieving user with id {req.params.id}')
        res.status(500).json({ error: 'Could not retrieve users' });
    }
}

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const {id, ...userData} = req.body;
        const newUser = await UsersService.createUser(userData);
        res.status(200).json(newUser);
    } catch(error){
        console.error('Error creating new user with name:' + error);
        res.status(500).json({ error: 'Could not create new user' });
    }
}
const userController = {
    getUsers,
    getUser,
    createUser
};

export { userController as default };