import React, { useState } from 'react';
import PostComponent from '../components/posts/post.jsx';

// React Hook
function Post(props) {

    const [comment, setComment] = useState(props.comment.text)

    const [showComment, setShowComment] = useState(false)
    const [validReaction, setValidReaction] = useState(false)

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
        setShowComment(!showComment);
    }

    // Manejar Reacción (Solo se permite una)
    const handleReaction = (index) => {
        if(validReaction) return;
        setValidReaction(true);
        props.handleReaction(index);
    }

    return (
        <PostComponent 
            showComment={showComment}
            handleClickComment={handleClickComment}
            post={props.post} 
            key={props.index} 
            index={props.index} 
            handleReaction={handleReaction} 
            handleChangeComment={handleChangeComment}
            value={comment} 
            handleKeyDown={handleKeyDown}/>
    )
}

export default Post;