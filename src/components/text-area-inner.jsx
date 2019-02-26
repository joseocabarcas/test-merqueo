import React from 'react';
import './text-area-inner.scss';

function TextAreaInner(props) {
    return (
        <textarea onKeyDown={props.handleKeyDown} onChange={props.handleChangeComment} className="text-area-inner" placeholder={props.text}></textarea>
    )
}

export default TextAreaInner;