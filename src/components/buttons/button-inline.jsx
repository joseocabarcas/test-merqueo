import React from 'react';
import './button-inline.scss';

function ButtonInline(props) {
    return (
        <button onClick={props.handleClick} className="button-inline" type={props.type}>{props.text}</button>
    )
}

export default ButtonInline;