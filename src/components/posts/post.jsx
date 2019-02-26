import React from 'react';
import Comment from '../comments/comment.jsx';
import './post.scss';
import ButtonInline from '../buttons/button-inline.jsx';
import CommentsLayout from '../comments/comments-layout.jsx';
import TextAreaInner from '../textareas/text-area-inner.jsx';
import * as moment from 'moment-timezone';
import PostContentAction from './post-content-actions.jsx';

function Post(props) {
    
    return (
        <div className="post">
            <div className="post__content">
                <div className="post_content__section">
                    <div className="post__content__section__picture">
                        <img src={props.post.profilePicture} alt="No image"/>
                    </div>
                    <div className="post__content__section__data">
                        <div className="post__content__section__data__title">
                            <h3>{props.post.username}</h3>
                            <span>{moment.tz(props.post.time, 'America/Bogota').fromNow()}</span>
                        </div>
                        <p className="post__content__section__data__description">{props.post.description}</p>
                        <div className="post__content__section__data__buttons">
                            <ButtonInline 
                                type="button" 
                                text="Reaccionar" 
                                handleClick={() => props.handleReaction(props.index)}/>
                            <ButtonInline 
                                type="button" 
                                text="Comentar" 
                                handleClick={() => props.handleClickComment()}/>
                        </div>
                    </div>
                </div>
                <PostContentAction post={props.post} />
            </div>
            <CommentsLayout>
                {props.post.comments.map((comment, index) => (
                    <Comment comment={comment} key={index} />
                ))}
                {
                    props.showComment && 
                        <TextAreaInner
                            value={props.value} 
                            handleKeyDown={(e) => props.handleKeyDown(e, props.index) } 
                            text="Escribe un comentario" 
                            handleChangeComment={(e) => props.handleChangeComment(e)}/>
                }
            </CommentsLayout>
        </div>
    )
}

export default Post;