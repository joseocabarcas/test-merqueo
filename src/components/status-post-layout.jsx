import React from 'react';
import './status-post-layout.scss';

function StatusPostLayout(props) {
    return (
        <form className="status-post">
            {props.children}
        </form>
    )
}

export default StatusPostLayout;