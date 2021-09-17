
import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllPosts } from '../store/posts';
import { updateProfilePic } from '../store/session';
import PhotoGrid from './Posts/PhotoGrid.js';
import PostFormModal from './Posts/PostFormModal';
import UserMission from './Missions/UserMission.js';
import LocationFormModal from './LocationModal/index.js'
import defaultUser from "../images/default_user.png"
import defaultUserPreview from "../images/default_user-preview.png"
import './user.css'

function User() {

    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user);
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

    const inputFile = useRef(null)

    // const [profilePic, setProfilePic] = useState("")

    // const uploadProfilePic = e => {
    //     console.log("TARGET FILES[0]", e.target.files[0])
    //     setProfilePic(e.target.files[0])
    //     console.log("PROFILE PIC", profilePic);
    // }

    const submitProfilePic = async (e) => {
        e.preventDefault()
        // inputFile.current.click();
        // setProfilePic(e.target.files[0])
        const profilePic = e.target.files[0]
        const payload = {profilePic, userId}
        console.log("PAYLOAD", payload);
        await dispatch(updateProfilePic(payload))
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
    if (user.profile_picture) {
        currentProfilePic = user.profile_picture
    } else {
        currentProfilePic = defaultUser
    }


    if (Number(userId) === Number(user.id)) {
        return (
            <div className="session-users-profile">
                <h1 >{user.username}'s Profile Page</h1>

                <div className="user-controls">

                    <div className="user-profile-pic-div">
                        {/* <form onSubmit={submitProfilePic}> */}
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
                            {/* <button type="submit" value={profilePic}>
                                <img className="user-profile-pic" src={currentProfilePic} alt="user profile"/>
                            </button> */}
                        {/* </form> */}

                    </div>
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
            <div className="user-profile-pic-div">
                <img className="user-profile-pic" src={defaultUserPreview} alt="user profile"/>
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
