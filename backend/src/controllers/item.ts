import { NextFunction, Request, Response } from 'express';
import ItemsService from '../services/itemService';

const getItems = async (req: Request, res: Response) => {
    try{
        const items = await ItemsService.getItems();
        res.json(items)
    } catch(error){
        console.error('Error retrieving items:', error);
        res.status(500).json({ error: 'Could not retrieve items' });
    } 
}

const getItem = async (req: Request, res: Response) => {
    try{
        const itemId: number = Number(req.params.id);
        const item = await ItemsService.getItem(itemId);
        if(item){
            res.json(item);
        }
        else{
            res.status(404).json({error: 'Item not found'});
        }
    } catch(error){
        console.error(`Error retrieving items with id ${req.params.item_id}`)
        res.status(500).json({ error: 'Could not retrieve item' });
    }
}

const createItem = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const itemData = {
            name: req.body.name,
            description: req.body.description,
            price: Number(req.body.price),
            quantity: Number(req.body.quantity), 
        };
        const newItem = await ItemsService.createItem(itemData);
        res.status(200).json(newItem);
    } catch(error){
        console.error('Error creating new item:' + error);
        res.status(500).json({ error: 'Could not create new item' });
    }
}

const updateItem = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const itemId: number = Number(req.params.id);
        const itemDataUpdate = {
            name: req.body.name,
            description: req.body.description,
            price: Number(req.body.price),
            quantity: Number(req.body.quantity), 
        };
        const updateItem = await ItemsService.updateItem(itemId,itemDataUpdate);
        res.status(200).json(updateItem);
    } catch(error){
        console.error('Error updating item:' + error);
        res.status(500).json({ error: 'Could not update item' });
    }
}

const deleteItem = async (req: Request, res: Response) => {
    try{
        const itemId: number = Number(req.params.id);
        const item = await ItemsService.deleteItem(itemId);
        if(item){
            res.json("Deleted item");
        }
        else{
            res.status(404).json({error: 'Item not found'});
        }
    } catch(error){
        console.error(`Error retrieving items with id ${req.params.item_id}`)
        res.status(500).json({ error: 'Could not retrieve item' });
    }
}
const itemController = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
};

export { itemController as default };