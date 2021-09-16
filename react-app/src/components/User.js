import React, {  useEffect , useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllPosts } from '../store/posts';
import PhotoGrid from './Posts/PhotoGrid.js';
import PostFormModal from './Posts/PostFormModal';
import UserMission from './Missions/UserMission.js';
// import UserLocationForm from './Missions/Missions.js';
import LocationFormModal from './LocationModal/index.js'

function User() {

    const dispatch= useDispatch()
    const user = useSelector(state => state.session.user);
    //const user_id = useSelector(state => state.session.user).id
    const posts = useSelector (state => Object.values(state.posts))
    const currentMission = useSelector(state => Object.values(state.missionsReducer))
    const { userId }  = useParams();
    const [paramUser, setParamUser] = useState({});

    useEffect(()=>{
        dispatch(getAllPosts())
    },[dispatch])
    
    const userPosts = posts.filter((post)=>post.user_id === Number(userId)).reverse()

    // console.log(userPosts, '<===== USER_POSTS ')

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
            <div>
                <h1>{user.username}'s profile page</h1>
                <UserMission />
                <div>
                    <strong>username:</strong> {user.username}
                </div>
                <div>
                    <strong>email:</strong> {user.email}
                </div>
                <div>
                    {addPost}
                </div>
                <div className="mission-dashboard-note">
                    <p className="update-location-disclaimer">Other users can see your posts, but not your mission dashboard</p>
                    <p className="update-location-prompt">Need to update your current location settings?</p>
                    <LocationFormModal />
                </div>

                <PhotoGrid posts={userPosts} />
            </div>
        );
    } else {
        return (
            <div className="other-users-profile">
            <h1>{paramUser.username}'s profile page</h1>
            <PhotoGrid posts={userPosts} />
        </div>
        )

    }

}
export default User;
