import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts } from '../../store/posts'
import wordmark from "../../images/whereabouts.png"
import './homepage.css'

function Homepage() {

  const post_likes = {}
  const dispatch = useDispatch()

  const posts = useSelector(state => Object.values(state.posts))

  posts.forEach(post => {
    let mostLikes = -Infinity
    post_likes[post.id] = post

  })

  console.log(post_likes, `<==== WHAT IS THISSSS`)
  useEffect(() => {
    dispatch(getAllPosts())
  }, [])

  return (
    <div className="homepage">
      <div className="homepage-hero-div">
        <img className="logo-wordmark" src={wordmark} alt="whereabouts wordmark" />
        <h2 className="homepage-hero-description">Where will you go and what you share about it? Will you stumble upon your new favorite cafe, take a hike through the woods, or seredipitously find just what you are looking for? Select your mission and let's gooooo!</h2>
      </div>

      <div className="homepage-howto-div">
        <div className="homepage-mission-box">
          <p>Select today's mission and set off on an adventure</p>
          <button className="secondary-button">SEE LOCATIONS</button>
        </div>
        <div className="homepage-share-box">
          <p>Document your experience with photos and text</p>
          <button className="secondary-button">GO TO PROFILE</button>
        </div>

        <div className="homepage-explore-box">
          <p>Discover people and places to inspire your next trek</p>
          <button className="secondary-button">EXPLORE POSTS</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
