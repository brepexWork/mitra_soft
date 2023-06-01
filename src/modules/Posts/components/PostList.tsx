import React, {useEffect, useState} from 'react';
import {fetchPosts} from "../reducer/AsyncThunks/fetchPosts";
import {useAppDispatch} from "../../../store/redux-hook";
import {useSelector} from "react-redux";
import fetchPostSelector from "../selectors/fetchPostSelector";
import Loader from "../../../components/Loader";
import PostItem from "./PostItem";
import {useSearchParams} from "react-router-dom";
import Select, {MultiValue, SingleValue} from "react-select";
import {Pagination} from "@mui/material";

const PostList = React.memo(() => {

    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('page');

    const [sort, setSort] = useState<SingleValue<{ label: string, value: 'asc' | 'desc' }> | null>(null)

    const dispatch = useAppDispatch()
    const {posts, loading, error} = useSelector(fetchPostSelector)

    const handlerPost = (page:number) => {
        setSearchParams({ page:  String(page)});
    }

    const options:MultiValue<{ label: string, value: 'asc' | 'desc' }> = [
        {label: 'По убыванию', value: 'asc'},
        {label: "По возврастанию", value: 'desc'}
    ]

    useEffect(() => {
        dispatch(fetchPosts({page: 0}))
    }, [])

    useEffect(() => {
        if(page && !isNaN(parseInt(page)))
            dispatch(fetchPosts({page: parseInt(page), sort: sort ? sort.value : null}))
        else {
            dispatch(fetchPosts({page: 0, sort: sort ? sort.value : null}))
        }
    }, [page, sort])

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
                    <Select
                        options={options}
                        value={sort}
                        onChange={(value) => setSort(value)}
                        placeholder={'Сортировка'}
                    />
                    <div className={`flex flex-wrap justify-center sm:justify-between mx-2 sm:mx-0 mt-6`}>
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
                        page={page && !isNaN(parseInt(page)) ? parseInt(page) : 1}
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