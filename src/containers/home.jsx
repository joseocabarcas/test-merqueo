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

    editPostReaction = (index, reaction) => {
        const posts = this.state.posts;
        posts[index].reactions.push(reaction)
        localStorage.setItem('posts', JSON.stringify([ ...posts ]))
        this.setState((prevState, props) => {
            return {
                posts: [ ...posts ]
            }
        })
    };

    editPostComment = (index, comment) => {
        const posts = this.state.posts;
        posts[index].comments.push(comment)
        localStorage.setItem('posts', JSON.stringify([ ...posts ]))
        this.setState((prevState, props) => {
            return {
                posts: [ ...posts ]
            }
        })
    };

    render() {
        return (
            <HomeLayout>
                <StatusPost pushPost={this.pushPost}/>
                <ListPosts 
                    posts={this.state.posts} 
                    editPostReaction={this.editPostReaction} 
                    editPostComment={this.editPostComment} />
            </HomeLayout>
        )
    }
}

export default HomeContainer;
