import React from 'react';
import Comment from './comment.jsx';
import './post.scss';
import ButtonInline from './button-inline.jsx';
import CommentsLayout from './comments-layout.jsx';
import TextAreaInner from './text-area-inner.jsx';
import * as moment from 'moment-timezone';

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
                            <ButtonInline type="button" text="Reaccionar" handleClick={() => props.handleReaction(props.index)}/>
                            <ButtonInline type="button" text="Comentar" handleClick={() => props.handleComment(props.index)}/>
                        </div>
                    </div>
                </div>
                <div className="post__content__actions">
                    <div className="post__content__actions__count-reactions">
                        <ul>
                            <li><span className="circle-reaction" style={{backgroundColor: 'green'}}></span></li>
                            <li><span className="circle-reaction" style={{backgroundColor: 'blue'}}></span></li>
                            <li><span className="circle-reaction" style={{backgroundColor: 'red'}}></span></li>
                        </ul>
                        <p>{props.post.reactions.length}</p>
                    </div>
                    <p className="post__content__actions__count-comment">{props.post.comments.length} {props.post.comments.length>1 ? 'Comentarios' : 'Comentario'}</p>
                </div>
            </div>
            <CommentsLayout>
                {props.post.comments.map((comment, index) => (
                    <Comment comment={comment} key={index} />
                ))}
                <TextAreaInner handleKeyDown={(e) => props.handleKeyDown(e, props.index) } text="Escribe un comentario" handleChangeComment={props.handleChangeComment}/>
            </CommentsLayout>
        </div>
    )
}

export default Post;