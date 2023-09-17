import { ProductItem } from '@/components/items/types';
import axiosInstance from '../utils/axios'

const getAllItems = async () => {
    try {
      const response = await axiosInstance.get(`/items/all`).then((res) => {
              if(res.status == 200){
                  return res.data;
              }
              else{
                return res;
              }
          }).catch((error) => {
              console.log("Get All Items failed: " + error);
          })
      return response;
  
      }
    catch (error) {
      console.log("Error:" + error);
    }
  };

const getItem = async (id : number) => {
  try {
    const response = await axiosInstance.get(`/items/${id}`).then((res) => {
            if(res.status == 200){
                return res.data;
            }
            if(res.status == 404){
                return res.statusText;
            }
        }).catch((error) => {
            console.log("Get item failed: " + error);
        })
    return response;

    }
  catch (error) {
    console.log("Error:" + error);
  }
};

const deleteItem = async (id : number) => {
    try {
      const response = await axiosInstance.delete(`/items/${id}`).then((res) => {
              return res.status;
          }).catch((error) => {
              console.log("Delete item failed: " + error);
          })
      return response;
  
      }
    catch (error) {
      console.log("Error:" + error);
    }
  };
  const updateItem = async (item : ProductItem) => {
    try {
        const updatedItem = {
            name: item.name,
            description: item.description,
            price: item.price,
            quantity: item.quantity,
        };
        console.log(updatedItem);
      const response = await axiosInstance.patch(`/items/${item.item_id}`,updatedItem)
            .then((res) => {
                return res.status;
          }).catch((error) => {
              console.log("Update item failed: " + error);
          })
      return response;
  
      }
    catch (error) {
      console.log("Error:" + error);
    }
  };

  const createItem = async (item : ProductItem) => {
    try {
        const createdItem = {
            name: item.name,
            description: item.description,
            price: item.price,
            quantity: item.quantity,
        };
        console.log(createdItem);
      const response = await axiosInstance.post(`/items`,createdItem)
            .then((res) => {
                return res.status;
          }).catch((error) => {
              console.log("Create item failed: " + error);
          })
      return response;
  
      }
    catch (error) {
      console.log("Error:" + error);
    }
  };
const itemService = {
    getAllItems,
    getItem,
    deleteItem,
    updateItem,
    createItem
};

export { itemService as default };