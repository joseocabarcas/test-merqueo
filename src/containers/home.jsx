import React, { Component } from 'react';
import Random from 'random-username-generator';
import HomeLayout from '../components/home-layout.jsx';
import StatusPost from './status-post.jsx';
import ListPosts from './list-posts.jsx';
import './home.scss';

/**
 * HomeContainer
 * State = posts, post and username
*/
class HomeContainer extends Component {
    state = {
        posts: localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : [],
        post: null,
        username: Random.generate(),
    }

    // Agregar un post
    pushPost = (post) => {
        this.setState((prevState, props) => {
            localStorage.setItem('posts', JSON.stringify([ ...prevState.posts, post ]))
            return {
                posts: [ ...prevState.posts, post ]
            }
        })
    }

    // Agregar la reacción al post
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

    // Agregar un comentario
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
                <StatusPost 
                    pushPost={this.pushPost} 
                    username={this.state.username}/>
                <ListPosts
                    username={this.state.username} 
                    posts={this.state.posts} 
                    editPostReaction={this.editPostReaction} 
                    editPostComment={this.editPostComment} />
            </HomeLayout>
        )
    }
}

export default HomeContainer;
