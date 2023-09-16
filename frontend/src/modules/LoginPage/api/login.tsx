import axiosInstance from '../../../utils/axios'

const loginUser = async (username : string, password : string) => {
  try {
    const response = await axiosInstance.post(`/login`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.log("Error:" + error);
  }
};

const loginApi = {
    loginUser
};

export { loginApi as default };