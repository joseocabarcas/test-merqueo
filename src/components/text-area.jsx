import React from 'react';
import './text-area.scss';

function TextArea(props) {
    return (
        <textarea className="text-area-status" placeholder={props.text}></textarea>
    )
}

export default TextArea;