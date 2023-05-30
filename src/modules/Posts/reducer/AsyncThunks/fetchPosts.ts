import {CaseReducer, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {IFetchPosts} from "../../types/AsynkThunks/IFetchPosts";
import {IPostItem, IPostsSlice} from "../../types/IPostsSlice";
import axios, {Axios, AxiosResponse} from "axios";

export const fetchPosts = createAsyncThunk<IPostItem[], number, {rejectValue: string}>(
    'posts/fetch',
    async (page, {rejectWithValue}) => {
        try {

            const response_posts:AxiosResponse<IPostItem[]> = await axios({
                url: `https://jsonplaceholder.typicode.com/posts?_page=${page}`,
                method: "GET",
            })

            return response_posts.data
        } catch(e:any) {
            if(typeof e === "string")
                return rejectWithValue(e)
            if(e.message)
                return rejectWithValue(e.message)

            return rejectWithValue('Произошла ошибка при получении постов')
        }
    }
)

export const Pending:CaseReducer<IPostsSlice> = (state) => {
    state.loading = true
    state.error = null
}

export const Reject:CaseReducer<IPostsSlice, PayloadAction<string | undefined>> = (state, action) => {
    state.loading = false
    state.error = action.payload ? action.payload : 'Не известная ошибка'
}

export const Fulfilled:CaseReducer<IPostsSlice, PayloadAction<IPostItem[]>> = (state, action) => {
    state.loading = false
    state.error = null
    state.posts = action.payload
}

