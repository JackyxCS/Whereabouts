import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
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
                <div className="edit-comment-div">
                    <form className="" onSubmit={handleSubmit}>
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
                    <form>
                        <button
                            onClick={() => setShowEditModal(false)}
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            )
        } else {
            return (
                <li className="comments-list-item">
                    <div>{comment.comment}</div>
                    <div><NavLink to={`/users/${comment.user_details.id}`}>@{comment.user_details.username}</NavLink></div>
                    <div className="button-div">
                        <button
                            onClick={handleEditCommentClick}
                        >
                            Edit Comment
                        </button>
                        <button
                            onClick={handleDeleteCommentClick}
                        >
                            Delete Comment
                        </button>
                    </div>
                    {showDeleteModal && <DeleteCommentModal commentId={comment.id} showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} />}
                </li>
            )
        }
    } else {
        return (
            <li className="comments-list-item">
                {comment.comment}
                <div><NavLink to={`/users/${comment.user_details.id}`}>@{comment.user_details.username}</NavLink></div>
            </li>
        );

    }

};

export default CommentDetail;
