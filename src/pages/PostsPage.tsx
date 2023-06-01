import React from 'react';
import {PostList} from '../modules/Posts/index'

const PostsPage = () => {

    return (
        <div className={`container mx-auto px-4 lg:px-0 mt-6`}>
            <PostList />
        </div>
    );
};

export default PostsPage;