import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {PostSlice} from '../modules/Posts'
import {userAPI} from "../modules/User/services/UserService";
import {PostsAPI} from "../modules/Posts/services/PostsAPI";

const rootReducer = combineReducers({
    posts: PostSlice,
    [userAPI.reducerPath]: userAPI.reducer,
    [PostsAPI.reducerPath]: PostsAPI.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userAPI.middleware).concat(PostsAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch