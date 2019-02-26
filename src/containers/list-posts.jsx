import React, { useState } from 'react';
import ListPostsLayout from '../components/list-posts-layout.jsx';
import Post from '../components/post.jsx';

function ListPosts(props) {

    const handleReaction = () => {};

    const handleComment = () => {};

    return (
        <ListPostsLayout>
            {props.posts.map((post, index) => (
                <Post post={post} key={index} handleReaction={handleReaction} handleComment={handleComment} />
            ))}
        </ListPostsLayout>
    )
}

export default ListPosts;