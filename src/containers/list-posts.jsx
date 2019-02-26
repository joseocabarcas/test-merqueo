import React, { useState } from 'react';
import ListPostsLayout from '../components/list-posts-layout.jsx';
import Post from '../components/post.jsx';

function ListPosts(props) {

    const [ reaction, setReaction ] = useState('');
    const [ comment, setComment ] = useState({
        text: '',
        date: null,
    });

    const handleReaction = () => {
        console.log('push reaction');
    };

    const handleComment = (text) => {
        setComment({
            ...comment,
            text: text,
        })
    };

    const handleKeyDown = (e) => {
        if(e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            console.log('push comment');
        }
    }

    return (
        <ListPostsLayout>
            {props.posts.map((post, index) => (
                <Post post={post} key={index} index={index} handleReaction={handleReaction} handleComment={handleComment} handleKeyDown={handleKeyDown}/>
            ))}
        </ListPostsLayout>
    )
}

export default ListPosts;