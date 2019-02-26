import React from 'react';

function ListPostsLayout(props) {
    return (
        <div className="list-posts">
            {props.children}
        </div>
    )
}

export default ListPostsLayout;