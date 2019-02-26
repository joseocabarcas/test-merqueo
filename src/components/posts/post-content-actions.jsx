import React from 'react';
import './post-content-actions.scss';

function PostContentAction(props) {
    return (
        <div className="post__content__actions">
            <div className="post__content__actions__count-reactions">
                <ul>
                    {props.post.reactions.map((reaction, index) => {
                        if(index>2) return;
                        return (
                            <li key={index}><span className="circle-reaction" style={reaction}></span></li>
                        )
                    })}
                </ul>
                <p>{props.post.reactions.length}</p>
            </div>
            <p className="post__content__actions__count-comment">{props.post.comments.length} {props.post.comments.length>1 ? 'Comentarios' : 'Comentario'}</p>
        </div>
    )
}

export default PostContentAction;