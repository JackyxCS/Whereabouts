import React from 'react';
import PhotoGrid from './PhotoGrid';
import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import{getAllPosts} from '../store/posts'
function Homepage() {

  const post_likes = {}
  const dispatch = useDispatch()
  const posts = useSelector(state => Object.values(state.posts))
  posts.forEach(post =>{
    let mostLikes = -Infinity
    post_likes[post.id] = post

  })



  console.log(post_likes, `<==== WHAT IS THISSSS`)
  useEffect(()=>{
    dispatch(getAllPosts())
  },[])
  return (
    <div className="homepage">
        <div className="homepage-hero-div">
            <h1 className="homepage-hero-title">Whereabouts</h1>
            <h2 className="homepage-hero-description">LGTM</h2>
        </div>

        <div className="homepage-howto-div">
            <div className="homepage-missions-box">
            </div>
            <div className="homepage-share-box">
            </div>
            <div className="homepage-posts-box">
            </div>
        </div>

        <h2>Give this PhotoGrid some query props specific to the homepage (6 most popular)!</h2>
        <PhotoGrid />
    </div>
  );
};

export default Homepage;
