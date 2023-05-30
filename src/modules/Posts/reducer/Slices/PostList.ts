import {createSlice} from "@reduxjs/toolkit";
import {IPostsSlice} from "../../types/IPostsSlice";
import * as actions from '../AsyncThunks/fetchPosts'

const initialState = {
    loading: false,
    error: null,
    posts: []
} as IPostsSlice

const PostList = createSlice({
    name: '@Post',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(actions.fetchPosts.pending, actions.Pending)
        .addCase(actions.fetchPosts.rejected, actions.Reject)
        .addCase(actions.fetchPosts.fulfilled, actions.Fulfilled)
})

export default PostList.reducer