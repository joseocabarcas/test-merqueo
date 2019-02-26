import React, { useState } from 'react';
import ListPostsLayout from '../components/posts/list-posts-layout.jsx';
import Post from './post.jsx';
import moment from 'moment-timezone';

// React Hook
function ListPosts(props) {

    const [ comment, setComment ] = useState({
        text: '',
        time: null,
        picture: 'https://place-hold.it/60x60',
        username: props.username,
    });

    // Array para dar un color random a la reacción
    const randomColor = [{backgroundColor: 'green'}, {backgroundColor: 'blue'}, {backgroundColor: 'red'}]

    // Manejar reacción
    const handleReaction = (index) => {
        props.editPostReaction(index, randomColor[Math.floor(Math.random()*randomColor.length)]);
    };

    // Controlar cambios en el textarea
    const handleChangeComment = (text) => {
        setComment({
            ...comment,
            text: text,
        })
    };

    // Controlar el enter en el textarea
    const handleKeyDown = (e, index) => {
        if(e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
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
                    username={props.username}
                    post={post} 
                    key={index} 
                    index={index} 
                    handleReaction={handleReaction} 
                    handleChangeComment={handleChangeComment}
                    comment={comment} 
                    handleKeyDown={handleKeyDown}/>
            ))}
        </ListPostsLayout>
    )
}

export default ListPosts;