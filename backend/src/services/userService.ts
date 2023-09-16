import UserRepo from '../dataAccess/userRepo'
import { User } from '../models/user.model';

const getUsers =async () => {
    const users = await UserRepo.GetUsers();
    return users
}

const getUser = async (id:number) =>{
    const user = await UserRepo.GetUser(id);
    return user;
}

const getUserByName = async (name:string) => {
    const user = await UserRepo.GetUserByName(name);
    return user;
}

const createUser = async (userData:User) =>{
    const user = await UserRepo.CreateUser(userData);
    return user;
}

const UserService = {
    getUsers,
    getUser,
    createUser,
    getUserByName
  };
  
export { UserService as default };