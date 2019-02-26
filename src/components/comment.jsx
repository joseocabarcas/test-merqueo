import React from 'react';
import moment from 'moment-timezone';
import './comment.scss';


function Comment(props) {
    console.log(props.comment)
    return (
        <div className="comment">
            <img src="https://place-hold.it/60x60" alt="no profile"/>
            <div className="comment-content">
                <h4><strong>Elena</strong></h4>
                <p>{props.comment.text}</p>
                <span>{moment.tz(props.comment.time, 'America/Bogota').fromNow()}</span>
            </div>
        </div>
    )
}

export default Comment;