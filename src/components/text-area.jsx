import React from 'react';
import './text-area.scss';

function TextArea(props) {
    return (
        <textarea className="text-area-status">{props.placeholder}</textarea>
    )
}

export default TextArea;