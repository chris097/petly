import { useQuery } from "@tanstack/react-query";
import fetchApi from "../helpers/apis/fetchApi";

// const { REACT_APP_BACKEND_URL } = process.env;

const useQueryApi = (key, payload) => {
    const { data, isLoading, isFetching } = useQuery({
        queryKey: [key],
        queryFn: () => fetchApi(`https://pets-v2.dev-apis.com/${payload}`)
    })
    return {
        data,
        isLoading,
        isFetching
    }
};

export default useQueryApi;