import { Prisma, PrismaClient } from '@prisma/client';
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
    const userObj = await prisma.user.create({
        data: userData,            
    }).then((res) => {
        logger.info('Created user', { res });
        return res;
    }).catch((error) => {
        let err = error.message;
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                err = 'There is a unique constraint violation, a new user cannot be created with duplicate username or email';
                logger.error(err);
            }
        } 
        else if(error instanceof Prisma.PrismaClientUnknownRequestError){
            err = error.message;
            logger.error('Error Creating user:' + error.message)
        }
        else{
            logger.error('Error Creating user:', { error });
        }
        return err;
    })
    return userObj;
}

const UserRepo = {
    GetUsers,
    GetUser,
    CreateUser,
    GetUserByName
};

export { UserRepo as default };