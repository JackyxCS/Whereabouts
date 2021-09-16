
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllPosts } from '../store/posts';
import PhotoGrid from './Posts/PhotoGrid.js';
import PostFormModal from './Posts/PostFormModal';
import UserMission from './Missions/UserMission.js';
// import UserLocationForm from './Missions/Missions.js';
import LocationFormModal from './LocationModal/index.js'
import './user.css'

function User() {

    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user);
    //const user_id = useSelector(state => state.session.user).id
    const posts = useSelector(state => Object.values(state.posts))
    const currentMission = useSelector(state => Object.values(state.missionsReducer))
    const { userId } = useParams();
    const [paramUser, setParamUser] = useState({});

    useEffect(()=>{
        dispatch(getAllPosts())
    }, [dispatch])

    const userPosts = posts.filter((post) => post.user_id === Number(userId)).reverse()

    useEffect(() => {
        (async () => {
            const response = await fetch(`/api/users/${userId}`);
            const user = await response.json();
            setParamUser(user);
        })();
    }, [userId]);

let addPost
    console.log(currentMission,"<<<<<CURRENT MISSIONS")
    console.log(currentMission,"<<<<<LENGTH OF CURRENT MISSIONS ")
    if(currentMission.length === 3){
        addPost=(<></>)
    }else if (currentMission.length === 1){
       addPost=( <PostFormModal />)
    }else{
        addPost=(<></>)
    }

    if (!user) {
        return null;
    }

    // userId is string and user.id is integer
    if (Number(userId) === Number(user.id)) {
        return (
            <div className="session-users-profile">
                <h1 >{user.username}'s Profile Page</h1>

                <div className="user-controls">
                    {/* <div><strong>username:</strong> {user.username}</div> */}
                    <div className="user-profile-pic"></div>
                    <div>{user.email}</div>


                    <div className="mission-dashboard-div">
                        <h2>Mission Dashboard</h2>
                        <UserMission />
                        <div>
                            {addPost}
                        </div>
                        <div className="mission-dashboard-note">
                            <p className="mission-expiration">Active mission expires after 24 hours</p>
                            <div className ="update-location-div">
                                <p className="update-location-prompt">Need to update your current location settings?</p>
                                <LocationFormModal />
                            </div>

                        </div>
                    </div>

                    <p className="private-mission">Other users can see your posts, but not your mission dashboard</p>
                </div>

                <div className="post-section-div">
                    <h2 className="post-section-title">Posts from Past Missions</h2>
                    <PhotoGrid posts={userPosts} />
                </div>
            </div>
        );
    } else {
        return (
          <div className="other-users-profile">
            <h1>{paramUser.username}'s profile page</h1>
            <div className="user-profile-pic"></div>
            <div className="post-section-div">
                <h2 className="post-section-title">Posts from Past Missions</h2>
                <PhotoGrid posts={userPosts} />
            </div>
          </div>
        )

    }

}
export default User;
