import { User } from '@prisma/client';
import UserRepo from '../dataAccess/userRepo'

const getUsers =async () => {
    const users = await UserRepo.GetUsers();
    return users
}

const getUser = async (id:number) =>{
    const user = await UserRepo.GetUser(id);
    return user;
}

const createUser = async (userData:User) =>{
    const user = await UserRepo.CreateUser(userData);
    return user;
}

const UserService = {
    getUsers,
    getUser,
    createUser
  };
  
export { UserService as default };