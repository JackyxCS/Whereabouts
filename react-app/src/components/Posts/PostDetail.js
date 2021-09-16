import React, { useEffect } from "react";
// import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllPosts } from '../../store/posts';
import { fetchComments } from '../../store/comments';
import "./posts.css"

const PostDetail = () => {

    const dispatch = useDispatch()

    const { postId } = useParams();
    const posts = useSelector(state => state.posts)
    const comments = useSelector(state => state.comments)
    const spotComments = comments.filter(comment => Number(comment.post_id) === Number(postId))
    const post = posts[postId];

    useEffect(() => {
        dispatch(fetchComments())
        dispatch(getAllPosts())
    }, [dispatch])

    if (post) {
        return (
            <div className="posts-detail-list-item">
                <img className="post-detail-photo1" src={post.image_1} alt="main mission" />
                {post.image_2 && <img className="post-detail-photo2" src={post.image_2} alt="mission" />}
                {post.image_3 && <img className="post-detail-photo3" src={post?.image_3} alt="mission" />}
                {post.image_4 && <img className="post-detail-photo4" src={post.image_4} alt="mission" />}
                {post.image_5 && <img className="post-detail-photo5" src={post.image_5} alt="mission" />}
                {post.description && <p className="post-detail-description">{post.description}</p>}
                <p className="post-detail-location">Location: {post.post_lat}, {post.post_lng}</p>
                <p className="post-detail-date">Completed: {post.created}</p>
                <p className="post-detail-user">Created by: {post.userId}</p>
            </div>
        );
    } else {
        return null
    }


};

export default PostDetail;
