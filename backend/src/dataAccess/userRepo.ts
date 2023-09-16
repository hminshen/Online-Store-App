import { PrismaClient } from '@prisma/client';
import { User } from '../models/user.model';
const prisma = new PrismaClient();

const GetUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
}

const GetUser = async (id:number) =>{
    const user = await prisma.user.findUnique({
        where: {
            id: id,
        },
    });
    return user;
}

const GetUserByName = async (name:string) =>{
    const user = await prisma.user.findUnique({
        where: {
            username: name,
        },
    });
    return user;
}

const CreateUser = async (userData:User) => {
    const userObj = await prisma.user.create({
        data: userData,            
    });
    return userObj;
}

const UserRepo = {
    GetUsers,
    GetUser,
    CreateUser,
    GetUserByName
};

export { UserRepo as default };