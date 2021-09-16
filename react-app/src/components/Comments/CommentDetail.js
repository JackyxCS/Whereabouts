import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DeleteCommentModal from './DeleteCommentModal/index'

import "./comments.css"

const CommentDetail = ({ comment }) => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user);
    const { id: userId } = user

    const [showEditModal, setShowEditModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const handleDeleteCommentClick = (e) => {
        e.preventDefault();
        setShowDeleteModal(true)
    }

    if (userId === comment.user_id) {
        return (
            <div>
                <div>{comment.comment}</div>
                <button>
                    Edit Comment
                </button>
                <button
                    onClick={handleDeleteCommentClick}
                >
                    Delete Comment
                </button>
                {showDeleteModal && <DeleteCommentModal showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} />}
            </div>
        )
    } else {
        return (
            <li className="comments-list-item">
                {/* <p className="comments-list-item-content">add in the comments</p>
                <p>add in the comments</p>
                <p>add in the comments</p> */}
                {/* <NavLink exact to={`/comments/${comment.id}`}></NavLink> */}
                {comment.comment}
            </li>
        );

    }

};

export default CommentDetail;
