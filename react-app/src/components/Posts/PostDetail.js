import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./posts.css"

const PostDetail = ({ id }) => {
    const postData = useSelector((state) => state.posts[id][id]);
    return (
        <li className="posts-detail-list-item">
            <NavLink className="post-detail-container" to={`/posts/${id}`}>
                <img className="post-detail-photo1" src={postData?.image_1} alt="main mission" />
                <img className="post-detail-photo2" src={postData?.image_1} alt="mission" />
                <img className="post-detail-photo3" src={postData?.image_1} alt="mission" />
                <img className="post-detail-photo4" src={postData?.image_1} alt="mission" />
                <img className="post-detail-photo5" src={postData?.image_1} alt="mission" />
                <p className="post-detail-location">Location: {postData?.post_lat}, {postData?.post_lng}</p>
                <p className="post-detail-date">Completed: {postData?.created}</p>
                <p className="post-detail-description">{postData?.description}</p>
            </NavLink>
        </li>
    );
};

export default PostDetail;
