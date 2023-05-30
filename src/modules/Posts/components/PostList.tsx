import React, {useEffect} from 'react';
import {fetchPosts} from "../reducer/AsyncThunks/fetchPosts";
import {useAppDispatch} from "../../../store/redux-hook";
import {useSelector} from "react-redux";
import fetchPostSelector from "../selectors/fetchPostSelector";

const PostList = React.memo(() => {

    const dispatch = useAppDispatch()
    const {posts, loading, error} = useSelector(fetchPostSelector)

    useEffect(() => {
        dispatch(fetchPosts(0))
    }, [])

    return (
        <div>

        </div>
    );
})

export default PostList;