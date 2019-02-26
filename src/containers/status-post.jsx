import React, { useState } from 'react';
import StatusPostLayout from '../components/status-post-layout.jsx';
import Button from '../components/button.jsx';
import TextArea from '../components/text-area.jsx';
import moment from 'moment';

// React Hook
function StatusPost(props) {
    const [post, setPost] = useState({
        username: 'Juan Rodriguez',
        profilePicture: 'https://place-hold.it/60x60',
        time: null,
        description: '',
        comments: [],
        reactions: [],
    });

    const handleClick = () => {
        const postData = { 
            ...post,
            time: moment(),   
        }
        setPost(postData)
        console.log(postData);
        props.pushPost(postData);
    }

    const handleChange = (event) => {
        setPost({ ...post, description: event.target.value})
    }

    return (
        <StatusPostLayout>
            <TextArea text="Escribe aquí tu estado" handleChange={handleChange} />
            <Button type="button" text="Publicar" handleClick={handleClick}/>
        </StatusPostLayout>
    )
}

export default StatusPost;