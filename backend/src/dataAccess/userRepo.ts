import { PrismaClient, User } from '@prisma/client';
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

const CreateUser = async (userData:User) => {
    const userObj = await prisma.user.create({
        data: userData,            
    });
    return userObj;
}

const UserRepo = {
    GetUsers,
    GetUser,
    CreateUser
};

export { UserRepo as default };