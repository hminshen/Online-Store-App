import { PrismaClient } from '@prisma/client';
import { ItemCreate } from '../models/item.model';
import logger from '../logger/logger'; 

const prisma = new PrismaClient();

const GetItems = async () => {
    try{
        const items = await prisma.item.findMany();
        logger.info('Retrieved items', { items });
        return items;
    }
    catch(error){
        logger.error('Error retrieving items', { error });
        throw error;
    }
    
}

const GetItem = async (id:number) =>{
    try{
        const item = await prisma.item.findUnique({
            where: {
                item_id: id,
            },
        });
        logger.info('Retrieved item', { item });
        return item;
    }
    catch(error){
        logger.error('Error retrieving item', { error });
        throw error;
    }
}

const CreateItem = async (itemData:ItemCreate) => {
    try{
        const itemObj = await prisma.item.create({
            data: itemData,            
        });
        logger.info('Created item', { item: itemObj });
        return itemObj;
    }
    catch(error){
        logger.error('Error creating item', { error, item: itemData }); 
        throw error;
    }

}

const UpdateItem = async (item_id:number, itemData:ItemCreate) => {
    try{
        const updatedItemObj = await prisma.item.update({
            where: {
                item_id: item_id,
            },
            data: itemData,            
        });
        logger.info('Updated item', { item: updatedItemObj });
        return updatedItemObj;
    }
    catch(error){
        logger.error('Error updating item', { error, item: itemData });
        throw error;
    }
    
}

const DeleteItem = async (item_id:number) => {
    try{
        const deletedItemObj = await prisma.item.delete({
            where: {
                item_id: item_id,
            },            
        });
        logger.info('Deleted item', { item: deletedItemObj });
        return deletedItemObj;
    }
    catch(error){
        logger.error('Error deleting item', { error, item_id });
        throw error;
    }
    
}

const ItemRepo = {
    GetItems,
    GetItem,
    CreateItem,
    UpdateItem,
    DeleteItem
};

export { ItemRepo as default };