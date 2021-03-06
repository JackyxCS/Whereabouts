import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Redirect } from 'react-router-dom';
import PhotoGrid from '../Posts/PhotoGrid.js';
import LoginFormModal from '../auth/LoginFormModal';
import { getAllPosts } from '../../store/posts';
import "../Posts/posts.css"

function Explore() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const posts = useSelector(state => {
        return Object.values(state.posts)
    })
    let filteredPosts = []
    for (const p of posts.slice(0, 9)){
        filteredPosts.push(p)
    }
    filteredPosts.reverse()
    useEffect(()=>{
        dispatch(getAllPosts())

    },[dispatch])
    if (user) {
        return <Redirect to='/explore' />;
    }

    return (
        <div className="explore-grid-div">
            <h1>Sample of Recent Posts</h1>
            <PhotoGrid  posts={filteredPosts} />
            <div className="login-prompt-div">
                <h3 className="login-prompt-text">Sign up or log in to see everything!</h3>
                <LoginFormModal />
            </div>

        </div>
    );
};

export default Explore;
