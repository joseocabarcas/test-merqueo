import React, { useState } from 'react';
import StatusPostLayout from '../components/status-post-layout.jsx';
import Button from '../components/button.jsx';
import TextArea from '../components/text-area.jsx';

// React Hook
function StatusPost() {
    return (
        <StatusPostLayout>
            <Button type="submit" text="Publicar"/>
            <TextArea placeholder="Escribe aquí tu estado"/>
        </StatusPostLayout>
    )
}

export default StatusPost;