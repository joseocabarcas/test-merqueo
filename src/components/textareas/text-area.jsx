import React from 'react';
import './text-area.scss';

function TextArea(props) {
    return (
        <textarea 
            onChange={props.handleChange} 
            className="text-area-status" 
            placeholder={props.text} 
            value={props.value}></textarea>
    )
}

export default TextArea;