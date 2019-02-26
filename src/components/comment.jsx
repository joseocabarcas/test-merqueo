import React from 'react';
import './comment.scss'

function Comment(props) {
    return (
        <div className="comment">
            <img src="https://place-hold.it/60x60" alt="no profile"/>
            <div className="comment-content">
                <h4><strong>Elena</strong></h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est accusantium vero sit modi no</p>
                <span>hace 2 días</span>
            </div>
        </div>
    )
}

export default Comment;