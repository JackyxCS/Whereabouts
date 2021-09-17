import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchComments } from '../../store/comments';
import CommentDetail from './CommentDetail.js';
import "./comments.css"

function CommentsList() {

    const dispatch = useDispatch()

    const { postId } = useParams();
    const comments = useSelector(state => Object.values(state?.comments))
    const spotComments = comments.filter(comment => Number(comment.post_id) === Number(postId))
    
    useEffect(() => {
        dispatch(fetchComments())
    }, [dispatch])

    return (
        <div className="comment-section-div">
            <h2 className="comment-section-title">Comments</h2>
            <ul className="comments-list">
                {spotComments && spotComments?.map((comment) => {
                    return <CommentDetail key={comment?.id} comment={comment} />;
                })}
            </ul>
        </div>

    );
};

  export default CommentsList;
