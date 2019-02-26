import React from 'react';
import './list-post-layout.scss';

function ListPostsLayout(props) {
    return (
        <div className="list-posts">
            {props.children}
        </div>
    )
}

export default ListPostsLayout;