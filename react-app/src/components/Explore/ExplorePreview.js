import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Redirect } from 'react-router-dom';
import PhotoGrid from '../PhotoGrid';
import LoginFormModal from '../auth/LoginFormModal';
import { getAllPosts } from '../../store/posts';


function Explore() {
    const dispatch = useDispatch()

    const user = useSelector(state => state.session.user)
    const posts = useSelector(state => Object.values(state.posts))
    let filteredPost = []
    for (let i = 0; i < 9; i++){
        filteredPost.push(posts[i])
    }
    filteredPost.reverse()
    useEffect(()=>{
        dispatch(getAllPosts())

    },[dispatch])
    if (user) {
        return <Redirect to='/explore' />;
    }

    return (
        <div>
            <h2>Give this PhotoGrid some query props! (just 9 posts for teaser)</h2>

                <PhotoGrid  posts={filteredPost} />
            <h2>Sign up or log in to see everything!</h2>
            <LoginFormModal />
        </div>
    );
};

export default Explore;
