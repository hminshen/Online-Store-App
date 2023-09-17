import { PrismaClient } from '@prisma/client';
import { User } from '../models/user.model';
import logger from '../logger/logger'; 
const prisma = new PrismaClient();

const GetUsers = async () => {
    try{
        const users = await prisma.user.findMany();
        logger.info('Retrieved users', { users });
        return users;
    }
    catch(error){
        logger.error('Error retrieving users', { error });
        throw error;
    }

}

const GetUser = async (id:number) =>{
    try{
        const user = await prisma.user.findUnique({
            where: {
                id: id,
            },
        });
        logger.info('Retrieved user', { user });
        return user;
    }
    catch(error){
        logger.error('Error retrieving user', { error });
        throw error;
    }
    
}

const GetUserByName = async (name:string) =>{
    try{
        const user = await prisma.user.findUnique({
            where: {
                username: name,
            },
        });
        logger.info('Retrieved user', { user });
        return user;
    }
    catch(error){
        logger.error('Error retrieving user', { error });
        throw error;
    }
    
}

const CreateUser = async (userData:User) => {
    try{
        const userObj = await prisma.user.create({
            data: userData,            
        });
        logger.info('Created user', { userObj });
        return userObj;
    }
    catch(error){
        logger.error('Error Creating user', { error });
        throw error;
    }
}

const UserRepo = {
    GetUsers,
    GetUser,
    CreateUser,
    GetUserByName
};

export { UserRepo as default };