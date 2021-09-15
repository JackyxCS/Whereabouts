import { NavLink } from 'react-router-dom';
import "./posts.css"

const PostDetail = ({ post }) => {

    return (
        <li className="posts-preview-item-div">
            <NavLink exact to={`/posts/${post.id}`}>
                <img className="posts-preview-image" src={post.image_1} alt="post preview" />
            </NavLink>
        </li>
    );
};

export default PostDetail;
