import React from 'react';
import './comments-layout.scss';

function CommentsLayout(props) {
    return (
        <div className="comments">
            {props.children}
        </div>
    )
}

export default CommentsLayout;