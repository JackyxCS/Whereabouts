import React, {  useEffect , useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllPosts } from '../store/posts';
import PhotoGrid from './Posts/PhotoGrid.js';
import PostFormModal from './Posts/PostFormModal';

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
    if(currentMission.length === 0){
        addPost=(<></>)
    }else{
       addPost=( <PostFormModal />)
    }

    if (!user) {
        return null;
    }

    // userId is string and user.id is integer
    if (Number(userId) === Number(user.id)) {
        return (
            <div>
                <h1>{user.username}'s profile page</h1>
                <p>You can only see this personal info it is your page</p>
                <div>
                    <strong>username:</strong> {user.username}
                </div>
                <div>
                    <strong>email:</strong> {user.email}
                </div>
                <div>
                    {addPost}
                </div>
                <h2>Give this PhotoGrid some query props!</h2>
                <PhotoGrid posts={userPosts} />
            </div>
        );
    } else {
        return (
            <div>
            <h1>{paramUser.username}'s profile page</h1>
            <h2>Give this PhotoGrid some query props!</h2>
            <PhotoGrid posts={userPosts} />
        </div>
        )

    }

}
export default User;
