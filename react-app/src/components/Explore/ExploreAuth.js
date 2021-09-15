import React from 'react';
import PhotoGrid from '../PhotoGrid';
import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { getAllPosts } from '../../store/posts';
function Explore() {
    const dispatch = useDispatch()

    const posts = useSelector(state => Object.values(state.posts)).reverse()
    useEffect(()=>{
        dispatch(getAllPosts())

    },[])
    return (
        <div>
            <h2>Give this PhotoGrid some query props! (all posts with newest first)</h2>
            <PhotoGrid posts={posts} />
        </div>
    );
};

export default Explore;
