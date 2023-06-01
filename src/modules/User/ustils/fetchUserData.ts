import axios, {AxiosResponse} from "axios";
import {IFetchDataResponse} from "../types/IFetchDataResponse";

const fetchUserData = async (id: number):Promise<IFetchDataResponse | string> => {
    try {
        const response_user_data:AxiosResponse<IFetchDataResponse> = await axios({
            url: `https://jsonplaceholder.typicode.com/users/${id}`,
            method: "GET"
        })

        return response_user_data.data
    } catch(e:any) {
        return 'Пользователь не найден'
    }
}

export default fetchUserData