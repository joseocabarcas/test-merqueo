import React, { useState } from 'react';
import PostComponent from '../components/posts/post.jsx';

// React Hook
function Post(props) {

    const [comment, setComment] = useState(props.comment.text)

    const [showComment, setShowComment] = useState(false)

    // Controlar enter en textarea
    const handleKeyDown = (e, index) => {
        if(e.keyCode == 13 && e.shiftKey == false) {
            props.handleKeyDown(e, index);
            setComment('')
        }
    }

    // Controlar cambios en el input
    const handleChangeComment = (text) => {
        const data = text.target.value;
        setComment(data)
        props.handleChangeComment(data)
    };

    const handleClickComment = () => {
        console.log(!showComment)
        setShowComment(!showComment);
    }

    return (
        <PostComponent 
            showComment={showComment}
            handleClickComment={handleClickComment}
            post={props.post} 
            key={props.index} 
            index={props.index} 
            handleReaction={props.handleReaction} 
            handleChangeComment={handleChangeComment}
            value={comment} 
            handleKeyDown={handleKeyDown}/>
    )
}

export default Post;