import axios, {AxiosResponse} from "axios";
import {IFetchCommentsResponse} from "../types/IFetchCommentsResponse";

const fetchComments = async (id:number):Promise<IFetchCommentsResponse[]> => {
    const response_comments:AxiosResponse<IFetchCommentsResponse[]> = await axios({
        url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
        method: "GET"
    })

    return response_comments.data
}

export default fetchComments