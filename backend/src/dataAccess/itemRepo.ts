import { PrismaClient } from '@prisma/client';
import { ItemCreate } from '../models/item.model';
const prisma = new PrismaClient();

const GetItems = async () => {
    const items = await prisma.item.findMany();
    return items;
}

const GetItem = async (id:number) =>{
    const item = await prisma.item.findUnique({
        where: {
            item_id: id,
        },
    });
    return item;
}

const CreateItem = async (itemData:ItemCreate) => {
    const itemObj = await prisma.item.create({
        data: itemData,            
    });
    return itemObj;
}

const UpdateItem = async (item_id:number, itemData:ItemCreate) => {
    const updatedItemObj = await prisma.item.update({
        where: {
            item_id: item_id,
        },
        data: itemData,            
    });
    return updatedItemObj;
}

const DeleteItem = async (item_id:number) => {
    const deletedItemObj = await prisma.item.delete({
        where: {
            item_id: item_id,
        },            
    });
    return deletedItemObj;
}

const ItemRepo = {
    GetItems,
    GetItem,
    CreateItem,
    UpdateItem,
    DeleteItem
};

export { ItemRepo as default };