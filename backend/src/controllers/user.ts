import { NextFunction, Request, Response } from 'express';
import UsersService from '../services/userService';
import { SessionUser } from '../models/user.model';

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
        if(user){
            res.json(user);
        }
        else{
            res.status(404).json({error: `User not found with id: ${req.params.id}`});
        }
    } catch(error){
        console.error(`Error retrieving user with id ${req.params.id}`)
        res.status(500).json({ error: `Could not retrieve user of id: ${req.params.id}` });
    }
}

const getUserByName = async (req: Request, res: Response) => {
    try{
        const userName: string = req.params.name;
        const user = await UsersService.getUserByName(userName);
        if(user){
            res.json(user);
        }
        else{
            res.status(404).json({error: `User not found with name: ${req.params.name}`});
        }
    } catch(error){
        console.error(`Error retrieving user with name: ${req.params.name}`)
        res.status(500).json({ error: `Could not retrieve user of name: ${req.params.name}` });
    }
}

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const userData = req.body;
        const newUser: SessionUser | String = await UsersService.createUser(userData);
        if(typeof newUser == "string" || newUser == null){
            res.status(500).json({ error: 'Could not create new user:' + newUser });
        }
        else{
            res.status(200).json(newUser);
        }
        
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