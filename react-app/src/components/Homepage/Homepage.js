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

  const user = useSelector(state => state.session.user)
  const posts = useSelector(state => Object.values(state.posts))

  let profileLink1
  let profileLink2
  let profileLink3
  if (user) {
    profileLink1 = (<NavLink className="homepage-button" to={`/users/${user.id}`}>SEE LOCATIONS</NavLink>)
    profileLink2 = (<NavLink className="homepage-button" to={`/users/${user.id}`}>GO TO PROFILE</NavLink>)
    profileLink3 = (<NavLink className="homepage-button" to={`/explore`}>EXPLORE POSTS</NavLink>)
  } else {
    profileLink1 = (<NavLink className="homepage-button" to={`/login`}>SEE LOCATIONS</NavLink>)
    profileLink2 = (<NavLink className="homepage-button" to={`/login`}>GO TO PROFILE</NavLink>)
    profileLink3 = (<NavLink className="homepage-button" to={`/preview`}>EXPLORE POSTS</NavLink>)
  }

  posts.forEach(post => {
    post_likes[post.id] = post
  })

  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])

  return (
    <div className="homepage">
      <div className="homepage-hero-div">
        <img className="logo-wordmark" src={wordmark} alt="whereabouts wordmark" />
        <h2 className="homepage-hero-description">Where will you go and what you share about it? Will you stumble upon your new favorite cafe, take a hike through the woods, or seredipitously find just what you are looking for? Select your mission and let's gooooo!</h2>
      </div>

      <div className="homepage-howto-div">
        <div className="homepage-mission-box">
          <p>Select today's mission and set off on an adventure</p>
          <button className="secondary-button">{profileLink1}</button>
        </div>
        <div className="homepage-share-box">
          <p>Document your experience with photos and text</p>
          <button className="secondary-button">{profileLink2}</button>
        </div>

        <div className="homepage-explore-box">
          <p>Discover people and places to inspire your next trek</p>
          <button className="secondary-button">{profileLink3}</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
