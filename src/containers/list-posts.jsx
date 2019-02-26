import React, { useState } from 'react';
import ListPostsLayout from '../components/list-posts-layout.jsx';
import Post from './post.jsx';
import moment from 'moment-timezone';

function ListPosts(props) {

    // const [ reaction, setReaction ] = useState('');
    const [ comment, setComment ] = useState({
        text: '',
        time: null,
        picture: 'https://place-hold.it/60x60',
        username: props.username,
    });

    const randomColor = [{backgroundColor: 'green'}, {backgroundColor: 'blue'}, {backgroundColor: 'red'}]

    const handleReaction = (index) => {
        props.editPostReaction(index, randomColor[Math.floor(Math.random()*randomColor.length)]);
    };

    const handleChangeComment = (text) => {
        setComment({
            ...comment,
            text: text,
        })
    };

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

    const clearComment = () => {
        setComment({
            text: '',
            time: null,
            picture: 'https://place-hold.it/60x60',
            username: props.username,
        })
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