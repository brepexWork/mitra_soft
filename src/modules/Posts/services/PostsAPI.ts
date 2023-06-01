import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IFetchCommentsResponse} from "../types/IFetchCommentsResponse";

export const PostsAPI = createApi({
    reducerPath: 'PostsAPI',
    baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com/"}),
    endpoints: (build) => ({
        fetchComments: build.query<IFetchCommentsResponse[], number>({
            query: (id: number) => ({
                url: `/posts/${id}/comments`
            })
        })
    })
})