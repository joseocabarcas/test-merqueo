import React, { Component } from 'react';
import HomeLayout from '../components/home-layout.jsx';
import StatusPost from './status-post.jsx';
import ListPosts from './list-posts.jsx';

import './home.scss';

class HomeContainer extends Component {
    state = {
        posts: localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : [],
        post: null,
    }

    pushPost = (post) => {
        this.setState((prevState, props) => {
            localStorage.setItem('posts', JSON.stringify([ ...prevState.posts, post ]))
            return {
                posts: [ ...prevState.posts, post ]
            }
        })
    }

    render() {
        return (
            <HomeLayout>
                <StatusPost pushPost={this.pushPost}/>
                <ListPosts posts={this.state.posts}/>
            </HomeLayout>
        )
    }
}

export default HomeContainer;
