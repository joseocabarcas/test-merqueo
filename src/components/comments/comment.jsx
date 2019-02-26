import React from 'react';
import moment from 'moment-timezone';
import './comment.scss';


function Comment(props) {
    return (
        <div className="comment">
            <img src={props.comment.picture} alt="no profile"/>
            <div className="comment-content">
                <h4><strong>{props.comment.username}</strong></h4>
                <p>{props.comment.text}</p>
                <span>{moment.tz(props.comment.time, 'America/Bogota').fromNow()}</span>
            </div>
        </div>
    )
}

export default Comment;