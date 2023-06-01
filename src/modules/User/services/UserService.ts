import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (build) => ({
        fetchUser: build.query({
            query: (id: string) => ({
                url: `/users/${id}`
            })
        })
    })
})