import React, { useEffect } from "react";
import PhotoGrid from '../Posts/PhotoGrid.js';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts } from '../../store/posts';
import "../Posts/posts.css"

function Explore() {

    const dispatch = useDispatch()

    const posts = useSelector(state => Object.values(state.posts)).reverse()

    // const sortedPosts = posts.sort((a, b) => {
    //     if (a.created < b.created) {
    //       return -1;
    //     } else if (a.created === b.created) {
    //       return 0;
    //     } else {
    //       return 1;
    //     }
    // })



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
