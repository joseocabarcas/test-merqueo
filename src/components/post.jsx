import React from 'react';
import Comment from './comment.jsx';

function Post(props) {
    return (
        <div className="post">
            <div className="post__content">
                <div className="post__content__picture">
                    <img src="" alt="No image"/>
                </div>
                <div className="post__content__data">
                    <div className="post__content__data__title">
                        <h2>Juan Rodriguez</h2>
                        <span>Hace 40 minutos</span>
                    </div>
                    <p className="post__content__data__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est accusantium vero sit modi non, cumque ipsam. Delectus, dolorum debitis. Fugit, laborum! Fugiat inventore tempora, fuga itaque sint magni nisi veniam?</p>
                    <div className="post__content__data__buttons">
                        <button>Reaccionar</button>
                        <button>Comentar</button>
                    </div>
                </div>
                <div className="post__content__actions">
                    <div className="post__content__actions__count-reactions">
                        <ul>
                            <li><span></span></li>
                            <li><span></span></li>
                            <li><span></span></li>
                        </ul>
                        <span>13</span>
                    </div>
                    <p className="post__content__actions__count-comment">3 comentarios</p>
                </div>
            </div>
            <div className="comments">
                <Comment />
                <Comment />
            </div>
        </div>
    )
}

export default Post;