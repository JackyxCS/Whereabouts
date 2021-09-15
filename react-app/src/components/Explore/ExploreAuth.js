import React from 'react';
import PhotoGrid from '../Posts/PhotoGrid.js';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllPosts } from '../../store/posts';

function Explore() {

    const dispatch = useDispatch()

    const posts = useSelector(state => Object.values(state.posts)).reverse()
    useEffect(() => {
        dispatch(getAllPosts())

    }, [dispatch])

    return (
        <div className="explore-grid-div">
            <h1>Explore Posts from All Users</h1>
            <PhotoGrid posts={posts} />
        </div>
    );
};

export default Explore;
