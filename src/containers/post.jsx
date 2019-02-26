import React, { useState } from 'react';
import PostComponent from '../components/post.jsx';

function Post(props) {

    const [comment, setComment] = useState(props.comment.text)

    const handleKeyDown = (e, index) => {
        if(e.keyCode == 13 && e.shiftKey == false) {
            props.handleKeyDown(e, index);
            setComment('')
        }
    }

    const handleChangeComment = (text) => {
        const data = text.target.value;
        setComment(data)
        props.handleChangeComment(data)
    };

    return (
        <PostComponent 
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