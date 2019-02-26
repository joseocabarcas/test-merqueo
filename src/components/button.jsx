import React from 'react';
import './button.scss';

function Button(props) {
    return (
        <button className="button-primary" type={props.type}>{props.text}</button>
    )
}

export default Button;