import React, {useEffect} from 'react';
import {fetchPosts} from "../reducer/AsyncThunks/fetchPosts";
import {useAppDispatch} from "../../../store/redux-hook";
import {useSelector} from "react-redux";
import fetchPostSelector from "../selectors/fetchPostSelector";
import Loader from "../../../components/Loader";
import {Pagination} from '@mui/material';
import PostItem from "./PostItem";
import {useSearchParams} from "react-router-dom";

const PostList = React.memo(() => {

    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('page');

    const dispatch = useAppDispatch()
    const {posts, loading, error} = useSelector(fetchPostSelector)

    const handlerPost = (page:number) => {
        setSearchParams({ page:  String(page)});
    }

    useEffect(() => {
        dispatch(fetchPosts(0))
    }, [])

    useEffect(() => {
        if(page)
            dispatch(fetchPosts(parseInt(page)))
    }, [page])

    return (
        <div>
            {loading &&
                <div className={`flex justify-center mt-4 w-full`}>
                    <Loader/>
                </div>
            }

            {
                !loading && !error &&
                <>
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

                    <Pagination
                        count={10}
                        page={page ? parseInt(page) : 1}
                        onChange={(_, page) => handlerPost(page)}
                        sx={{
                            justifyContent: 'center',
                            display: 'flex',
                            marginTop: '20px'
                        }}
                    />
                </>
            }
        </div>
    );
})

export default PostList;