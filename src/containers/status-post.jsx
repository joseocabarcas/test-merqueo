import React, { useState } from 'react';
import StatusPostLayout from '../components/status-post-layout.jsx';
import Button from '../components/button.jsx';
import TextArea from '../components/text-area.jsx';
import moment from 'moment-timezone';

// React Hook
function StatusPost(props) {
    const [post, setPost] = useState({
        username: props.username,
        profilePicture: 'https://place-hold.it/60x60',
        time: null,
        description: '',
        comments: [],
        reactions: [],
    });

    const handleClick = () => {
        const postData = { 
            ...post,
            time: moment.tz('America/Bogota'),   
        }
        setPost(postData)
        props.pushPost(postData);
        clearData();
    }

    const handleChange = (event) => {
        setPost({ ...post, description: event.target.value})
    }

    const clearData = () => {
        setPost({
            username: props.username,
            profilePicture: 'https://place-hold.it/60x60',
            time: null,
            description: '',
            comments: [],
            reactions: [],
        })
    }

    return (
        <StatusPostLayout>
            <TextArea 
                text="Escribe aquí tu estado" 
                handleChange={handleChange} 
                value={post.description}/>
            <Button 
                type="button" 
                text="Publicar" 
                handleClick={handleClick}/>
        </StatusPostLayout>
    )
}

export default StatusPost;