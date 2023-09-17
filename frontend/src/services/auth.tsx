import axiosInstance from '../utils/axios';

const signOut = async () => {
  try {
    const response = await axiosInstance.get(`/logout`).then((res) => {
            return res.status;
        }).catch((error) => {
            console.log("Login user failed: " + error);
        })
    return response;

    }
  catch (error) {
    console.log("Error:" + error);
  }
};

const authService = {
    signOut
};

export { authService as default };