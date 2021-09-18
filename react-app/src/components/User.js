
import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllPosts } from '../store/posts';
import {   updateProfilePic } from '../store/session';
import { fetchUsers } from '../store/users';
import PhotoGrid from './Posts/PhotoGrid.js';
import PostFormModal from './Posts/PostFormModal';
import UserMission from './Missions/UserMission.js';
import LocationFormModal from './LocationModal/index.js'
import defaultUser from "../images/default_user.png"
import defaultUserPreview from "../images/default_user-preview.png"
import './user.css'

function User() {


    const dispatch = useDispatch()
    const user = useSelector(state => state?.session.user);
    const users = useSelector(state => Object.values(state?.users))
    const posts = useSelector(state => Object.values(state.posts))
    const currentMission = useSelector(state => Object.values(state.missionsReducer))
    const { userId } = useParams();
    const [paramUser, setParamUser] = useState({});


    useEffect(()=>{
        dispatch(getAllPosts())



    }, [dispatch])
    console.log(users,"<<<<<USERS__FRONTEND")

    const userPosts = posts.filter((post) => post.user_id === Number(userId)).reverse()

    const profileOwner = users?.filter(user => +userId === +user.id )[0]
    console.log(profileOwner, "WHATTT DI IS????")
    useEffect(() => {
        (async () => {
            const response = await fetch(`/api/users/${userId}`);
            const user = await response.json();
            setParamUser(user);
        })();

    }, [userId]);

    const inputFile = useRef(null)

    const submitProfilePic = async (e) => {
        e.preventDefault()

        const profilePic = e.target.files[0]
        const payload = {profilePic, userId}

        await dispatch(updateProfilePic(payload))
        await dispatch(fetchUsers())
        return
    }

    let addPost
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
    let currentProfilePic
    console.log(profileOwner.profile_picture, "<<<<PROFILE OWNER!!")

    // THIS IS NOT YOUR PAGE
    if (profileOwner['id'] === +user?.id ) {
        if(!profileOwner.profile_picture){
            currentProfilePic = defaultUser
        }else{
            currentProfilePic = profileOwner.profile_picture
        }

    } else {
        // THIS IS YOUR PAGE
        if(!profileOwner.profile_picture){
            currentProfilePic = defaultUserPreview
        }else{
            currentProfilePic = profileOwner.profile_picture
        }


    }


    if (Number(userId) === Number(user.id)) {
        return (
            <div className="session-users-profile">
                <h1 >{user.username}'s Profile Page</h1>

                <div className="user-controls">

                    <div className="user-profile-pic-div">

                            <input
                                style={{ display: "none" }}
                                ref={inputFile}
                                name="profile_picture"
                                onChange={submitProfilePic}
                                type="file"
                            />
                            <div onClick={() => inputFile.current.click()}>
                                <img className="user-profile-pic" src={currentProfilePic} alt="user profile"/>
                            </div>
                    </div>
                    <div>{user.email}</div>

                    <div className="mission-dashboard-div">
                        <h2>Mission Dashboard</h2>
                        <a href="https://www.latlong.net/" className="form-instructions" style={{color:"var(--wa-blue)" , textDecoration:"underline", marginBottom:'10px'}} target={"_blank"} rel={"noreferrer"}>Get your coordinates</a>
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
            <div className="user-profile-pic-div">
                <img className="user-profile-pic" src={currentProfilePic} alt="user profile"/>
            </div>
            <div className="post-section-div">
                <h2 className="post-section-title">Posts from Past Missions</h2>
                <PhotoGrid posts={userPosts} />
            </div>
          </div>
        )

    }

}
export default User;
