import React from 'react';
import './button.scss';

function Button(props) {
    return (
        <button 
            className="button-primary" 
            type={props.type} 
            onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

export default Button;