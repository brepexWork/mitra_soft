import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {PostSlice} from '../modules/Posts'

const rootReducer = combineReducers({
    posts: PostSlice
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch