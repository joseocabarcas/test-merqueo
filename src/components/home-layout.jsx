import React from 'react';

function HomeLayout(props) {
    return (
        <div className="home-layout">
            {props.children}
        </div>
    )
}

export default HomeLayout;