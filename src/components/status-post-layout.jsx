import React from 'react';

function StatusPostLayout(props) {
    return (
        <form className="status-post-layout">
            {props.children}
        </form>
    )
}

export default StatusPostLayout;