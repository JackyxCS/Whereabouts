import React, { useEffect, useState } from "react";
// import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllPosts } from '../../store/posts';
import { fetchComments } from '../../store/comments';
import FeatureImage from './FeatureImage.js'
import CommentsList from '../Comments/CommentsList.js'
import MapContainer from "../Maps";
import DeletePost from "./DeletePost";
import EditPostModal from "./EditPostModal";
import CommentForm from "../Comments/CommentForm";
import { addPostLike, getPostLikes, removePostLike } from "../../store/likes";
import "./posts.css"

const PostDetail = () => {

    const dispatch = useDispatch()
    const [featurePost, setFeaturePost] = useState("");


    const { postId } = useParams();
    const posts = useSelector(state => state?.posts)

    const comments = useSelector(state => Object.values(state?.comments))
    const postLikes = useSelector(state => Object.values(state?.likes))
    const spotComments = comments.filter(comment => Number(comment.post_id) === Number(postId))
    const post = posts[postId];
    const userId = useSelector(state => state?.session.user.id)
    const likeId = postLikes.filter(like => +postId === +like.post_id && +userId === +like.user_id)[0]

    useEffect(() => {
        dispatch(getAllPosts())
        dispatch(getPostLikes(postId))
    }, [dispatch])


    const handleLikeClick = async () => {
        await dispatch(addPostLike({ "user_id": userId, "post_id": postId }))
        await dispatch(getPostLikes(postId))
        await dispatch(getAllPosts())
        return
    }

    const handleUnlikeClick = async () => {
        await dispatch(removePostLike(postId, likeId.id))
        await dispatch(getPostLikes(postId))
        await dispatch(getAllPosts())
        return
    }

    let likeDisplay

    if (!post.post_like_user_id_list.includes(userId)) {
        likeDisplay = (
            <>
                <i onClick={handleLikeClick} className="far fa-heart"></i>
                <p className="post-detail-like-count">{post.post_like_user_id_list.length} Likes</p>
            </>
        )
    } else {
        likeDisplay = (
            <>
                <i onClick={handleUnlikeClick} className="fas fa-heart"></i>
                <p className="post-detail-like-count">{post.post_like_user_id_list.length} Likes</p>
            </>
        )
    }

    useEffect(() => {
        if (featurePost === "" && post) {
            setFeaturePost(post.image_1)
        }
    }, [post, featurePost])
    const postUser = post?.user_id

    let EditShow
    let DeleteShow
    if (userId == postUser) {
        EditShow = (
            <>
                <EditPostModal postId={postId} />
            </>
        )
        DeleteShow = (
            <>
                <DeletePost postId={postId} />
            </>
        )
    } else {
        EditShow = (
            <>
            </>
        )
        DeleteShow = (
            <>
            </>
        )
    }

    const missions = { "mission_lat": post.post_lat, "mission_lng": post.post_lng }

    if (post) {
        return (
            <div className="posts-detail-list-item">

                <FeatureImage image={featurePost} />

                <div className="post-detail-thumbnail-div">
                    <img className="thumbnail-image post-detail-photo1" src={post.image_1} alt="main mission" onClick={() => setFeaturePost(post.image_1)} />
                    {post.image_2 && <img className="thumbnail-image post-detail-photo2" src={post.image_2} alt="mission" onClick={() => setFeaturePost(post.image_2)} />}
                    {post.image_3 && <img className="thumbnail-image post-detail-photo3" src={post.image_3} alt="mission" onClick={() => setFeaturePost(post.image_3)} />}
                    {post.image_4 && <img className="thumbnail-image post-detail-photo4" src={post.image_4} alt="mission" onClick={() => setFeaturePost(post.image_4)} />}
                    {post.image_5 && <img className="thumbnail-image post-detail-photo5" src={post.image_5} alt="mission" onClick={() => setFeaturePost(post.image_5)} />}
                </div>
                <div className="post-detail-likes-div">
                    {likeDisplay}
                </div>

                <div className="post-detail-created-div">
                    <p className="post-detail-date">{post.created}</p>
                    <p className="post-detail-user">@{post.user_details.username}</p>
                </div>

                {post.description && <p className="post-detail-description">{post.description}</p>}
                {EditShow}
                {DeleteShow}

                <div className="post-detail-map-div">
                    <MapContainer className="post-detail-map" missions={[missions]} />
                </div>

                <CommentsList />
                <CommentForm />

            </div>
        );
    } else {
        return null
    }
};

export default PostDetail;
