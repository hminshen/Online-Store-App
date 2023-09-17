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

const itemService = {
    getAllItems,
    getItem
};

export { itemService as default };