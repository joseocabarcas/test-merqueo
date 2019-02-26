import React, { Component } from 'react';
import HomeLayout from '../components/home-layout.jsx';
import StatusPost from './status-post.jsx';
import ListPosts from './list-posts.jsx';

import './home.scss';

class HomeContainer extends Component {
    render() {
        return (
            <HomeLayout>
                <StatusPost />
                <ListPosts />
            </HomeLayout>
        )
    }
}

export default HomeContainer;
