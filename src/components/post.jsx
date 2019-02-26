import React from 'react';
import Comment from './comment.jsx';
import './post.scss';
import ButtonInline from './button-inline.jsx';
import CommentsLayout from './comments-layout.jsx';
import TextAreaInner from './text-area-inner.jsx';

function Post(props) {
    return (
        <div className="post">
            <div className="post__content">
                <div className="post_content__section">
                    <div className="post__content__section__picture">
                        <img src="https://place-hold.it/60x60" alt="No image"/>
                    </div>
                    <div className="post__content__section__data">
                        <div className="post__content__section__data__title">
                            <h3>Juan Rodriguez</h3>
                            <span>Hace 40 minutos</span>
                        </div>
                        <p className="post__content__section__data__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est accusantium vero sit modi non, cumque ipsam. Delectus, dolorum debitis. Fugit, laborum! Fugiat inventore tempora, fuga itaque sint magni nisi veniam?</p>
                        <div className="post__content__section__data__buttons">
                            <ButtonInline type="button" text="Reaccionar"/>
                            <ButtonInline type="button" text="Comentar"/>
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
                        <p>13</p>
                    </div>
                    <p className="post__content__actions__count-comment">3 comentarios</p>
                </div>
            </div>
            <CommentsLayout>
                <Comment />
                <Comment />
                <TextAreaInner text="Escribe un comentario"/>
            </CommentsLayout>
        </div>
    )
}

export default Post;