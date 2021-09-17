import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DeleteCommentModal from './DeleteCommentModal/index';
import { createUpdate, fetchComments } from '../../store/comments';

import "./comments.css"

const CommentDetail = ({ comment }) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    const { id: userId } = user
    const postId = comment.post_id
    const commentId = comment.id

    const [showEditModal, setShowEditModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [updatedComment, setUpdatedComment] = useState(comment.comment)
    const [validationErrors, setValidationErrors] = useState([])

    const handleDeleteCommentClick = (e) => {
        e.preventDefault();
        setShowDeleteModal(true)
    }

    const handleEditCommentClick = (e) => {
        e.preventDefault();
        setShowEditModal(true)

    }

    useEffect(() => {
        const errors = [];
        if (updatedComment.length === 0) errors.push("Please leave a comment")
        setValidationErrors(errors)
    }, [updatedComment])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            commentId,
            updatedComment
        }

        let updated = await dispatch(createUpdate(payload))
        if (updated) {
            setShowEditModal(false)
            await dispatch(fetchComments())
            history.push(`/posts/${postId}`)
        }
    }

    if (userId === comment.user_id) {
        if (showEditModal) {
            return (
                <div>
                    <form onSubmit={handleSubmit}>
                        <textarea
                            placeholder={comment.comment}
                            name="updatedComment"
                            value={updatedComment}
                            onChange={(e) => setUpdatedComment(e.target.value)}
                        />
                        <button
                            type="submit"
                            disabled={validationErrors.length > 0}
                        >
                            Submit Update
                        </button>
                    </form>
                    <button
                        onClick={() => setShowEditModal(false)}
                    >
                        Cancel
                    </button>
                </div>
            )
        } else {
            return (
                <div>
                    <div>{comment.comment}</div>
                    <div>@{comment.user_details.username}</div>
                    <div>
                        <button
                            onClick={handleEditCommentClick}
                        >
                            Edit Comment
                        </button>
                        {/* {showEditModal && <EditCommentModal commentId={comment.id} showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} />}} */}
                    </div>
                    <div>
                        <button
                            onClick={handleDeleteCommentClick}
                        >
                            Delete Comment
                        </button>
                        {showDeleteModal && <DeleteCommentModal commentId={comment.id} showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} />}
                    </div>
                </div>
            )
        }
    } else {
        return (
            <li className="comments-list-item">
                {/* <p className="comments-list-item-content">add in the comments</p>
                <p>add in the comments</p>
                <p>add in the comments</p> */}
                {/* <NavLink exact to={`/comments/${comment.id}`}></NavLink> */}
                {comment.comment}
                <div>@{comment.user_details.username}</div>
            </li>
        );

    }

};

export default CommentDetail;
