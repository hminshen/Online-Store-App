import UserRepo from '../dataAccess/userRepo'
import { User } from '../models/user.model';

const getUsers =async () => {
    try{
        const users = await UserRepo.GetUsers();
        return users
    }
    catch(error){
        throw error;
    }
}

const getUser = async (id:number) =>{
    try{
        const user = await UserRepo.GetUser(id);
        return user;
    }
    catch(error){
        throw error;
    }
}

const getUserByName = async (name:string) => {
    try{
        const user = await UserRepo.GetUserByName(name);
        return user;
    }
    catch(error){
        throw error;
    }
}

const createUser = async (userData:User) =>{
    try{
        const user = await UserRepo.CreateUser(userData);
        return user;
    }
    catch(error){
        throw error;
    }
}

const UserService = {
    getUsers,
    getUser,
    createUser,
    getUserByName
  };
  
export { UserService as default };