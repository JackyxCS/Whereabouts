import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { Modal } from '../../../context/Modal';
import { deleteComment } from '../../../store/comments';

function DeleteCommentModal({ commentId, showDeleteModal, setShowDeleteModal }) {

    const history = useHistory()
    const dispatch = useDispatch()
    const { postId } = useParams();

    const handleClick = async (e) => {
        e.preventDefault();
        setShowDeleteModal(false)
        await dispatch(deleteComment(commentId))
        history.push(`/posts/${postId}`)
    }

    return (
        <>
            {showDeleteModal && (
                <Modal onClose={() => setShowDeleteModal(false)}>
                    <div className="submit-comment-form">
                        <button className="secondary-button" onClick={handleClick}>Confirm</button>
                        <button className="secondary-button" onClick={() => setShowDeleteModal(false)}>
                            Cancel
                        </button>
                    </div>
                </Modal>
            )
            }
        </>
    );
}

export default DeleteCommentModal;
