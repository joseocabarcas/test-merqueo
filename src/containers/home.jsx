import React, { Component } from 'react';
import HomeLayout from '../components/home-layout.jsx';
import StatusPost from './status-post.jsx';

class HomeContainer extends Component {
    render() {
        return (
            <HomeLayout>
                <StatusPost />
            </HomeLayout>
        )
    }
}

export default HomeContainer;
