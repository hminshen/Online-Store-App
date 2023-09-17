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
          throw { error: e.message };
        });
  
    const { data, error, isValidating: isLoading } = useSWR<CurrentUser, Error>("/users", userFetcher, {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    });
  
  
    return {
      data,
      error,
      isLoading,
    }
  }

export {
    useCurrentUser
}