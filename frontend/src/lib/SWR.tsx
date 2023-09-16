import useSWR from "swr";
import axiosInstance from '../utils/axios'

function useCurrentUser() {
    interface CurrentUser {
        id: number;
        username: string;
        role_id: number;
      }
    const userFetcher = (url: string) =>
        axiosInstance
        .get<CurrentUser>(url)
        .then((response) => {return response.data})
        .catch((e) => {
          throw new Error(e);
        });
  
    const { data, error } = useSWR<CurrentUser, Error>("/users", userFetcher, {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    });
  
  
    return {
      data,
      error,
    }
  }

export {
    useCurrentUser
}