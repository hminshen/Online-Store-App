import ItemRepo from '../dataAccess/itemRepo'
import { ItemCreate } from '../models/item.model';

const getItems =async () => {
    try{
        const items = await ItemRepo.GetItems();
        return items;
    }
    catch(error){
        throw error;
    }
    
}

const getItem = async (id:number) =>{
    try{
        const item = await ItemRepo.GetItem(id);
        return item;
    }
    
    catch(error){
        throw error;
    }
}

const createItem = async (itemData:ItemCreate) =>{
    try{
        const item = await ItemRepo.CreateItem(itemData);
        return item;
    }
    catch(error){
        throw error;
    }

}

const updateItem = async (item_id:number, itemData:ItemCreate) =>{
    try{
        const updatedItem = await ItemRepo.UpdateItem(item_id,itemData);
        return updatedItem;
    }
    catch(error){
        throw error;
    }
}

const deleteItem = async (item_id:number) =>{
    try{
        const deletedItem = await ItemRepo.DeleteItem(item_id);
        return deletedItem;
    }
    catch(error){
        throw error;
    }
}

const ItemService = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
  };
  
export { ItemService as default };