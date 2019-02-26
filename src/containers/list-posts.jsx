import React, { useState } from 'react';
import ListPostsLayout from '../components/list-posts-layout.jsx';
import Post from '../components/post.jsx';
import moment from 'moment-timezone';

function ListPosts(props) {

    const [ reaction, setReaction ] = useState('');
    const [ comment, setComment ] = useState({
        text: '',
        time: null,
    });

    const handleReaction = (index) => {
        console.log('push reaction');
        props.editPostReaction(index, true);
    };

    const handleChangeComment = (text) => {
        setComment({
            ...comment,
            text: text.target.value,
        })
    };

    const handleKeyDown = (e, index) => {
        if(e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            console.log('push comment');
            const commentData = {
                ...comment,
                time: moment.tz('America/Bogota'),
            }
            setComment(commentData)
            props.editPostComment(index, commentData);
        }
    }

    return (
        <ListPostsLayout>
            {props.posts.map((post, index) => (
                <Post 
                    post={post} 
                    key={index} 
                    index={index} 
                    handleReaction={handleReaction} 
                    handleChangeComment={handleChangeComment} 
                    handleKeyDown={handleKeyDown}/>
            ))}
        </ListPostsLayout>
    )
}

export default ListPosts;