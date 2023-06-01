import React, {useEffect} from 'react';
import {fetchPosts} from "../reducer/AsyncThunks/fetchPosts";
import {useAppDispatch} from "../../../store/redux-hook";
import {useSelector} from "react-redux";
import fetchPostSelector from "../selectors/fetchPostSelector";
import Loader from "../../../components/Loader";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material';
import bg from '../images/no-photo.jpg'
import CommentItem from "./CommentItem";
import PostItem from "./PostItem";

const PostList = React.memo(() => {

    const dispatch = useAppDispatch()
    const {posts, loading, error} = useSelector(fetchPostSelector)

    useEffect(() => {
        dispatch(fetchPosts(0))
    }, [])

    return (
        <div>
            {loading &&
                <div className={`flex justify-center mt-4 w-full`}>
                    <Loader/>
                </div>
            }

            <div className={`flex flex-wrap justify-center sm:justify-between mx-2 sm:mx-0`}>
                {posts.map((post, index) =>
                    <PostItem
                        key={index}
                        title={post.title}
                        description={post.body}
                        userId={post.userId}
                        id={post.id}
                    />
                )}
            </div>
        </div>
    );
})

export default PostList;