import axiosInstance from '../../../utils/axios'

const loginUser = async (username : string, password : string) => {
  try {
    const response = await axiosInstance.post(`/login`, {
        username,
        password,
        }).then((res) => {
            if(res.status == 200){
                return res.data;
            }
            if(res.status == 404){
                return res.statusText;
            }
        }).catch((error) => {
            console.log("Login user failed: " + error);
        })
    return response;

    }
  catch (error) {
    console.log("Error:" + error);
  }
};

const loginApi = {
    loginUser
};

export { loginApi as default };