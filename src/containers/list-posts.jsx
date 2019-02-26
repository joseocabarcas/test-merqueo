import React, { useState } from 'react';
import ListPostsLayout from '../components/list-posts-layout.jsx';
import Post from '../components/post.jsx';

function ListPosts(props) {
    return (
        <ListPostsLayout>
            <Post />
            <Post />
        </ListPostsLayout>
    )
}

export default ListPosts;