import ItemRepo from '../dataAccess/itemRepo'
import { ItemCreate } from '../models/item.model';

const getItems =async () => {
    const items = await ItemRepo.GetItems();
    return items;
}

const getItem = async (id:number) =>{
    const item = await ItemRepo.GetItem(id);
    return item;
}

const createItem = async (itemData:ItemCreate) =>{
    const item = await ItemRepo.CreateItem(itemData);
    return item;
}

const updateItem = async (item_id:number, itemData:ItemCreate) =>{
    const updatedItem = await ItemRepo.UpdateItem(item_id,itemData);
    return updatedItem;
}

const deleteItem = async (item_id:number) =>{
    const deletedItem = await ItemRepo.DeleteItem(item_id);
    return deletedItem;
}

const ItemService = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
  };
  
export { ItemService as default };