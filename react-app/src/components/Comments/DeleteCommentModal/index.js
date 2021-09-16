import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { Modal } from '../../../context/Modal';
import { deleteComment } from '../../../store/comments';
// import DeleteCommentForm from './LoginForm';

function DeleteCommentModal({ showDeleteModal, setShowDeleteModal }) {
    // const [showModal, setShowModal] = useState(false);

    const history = useHistory()
    const dispatch = useDispatch()
    const { postId } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowDeleteModal(false)
        await dispatch(deleteComment())
        history.push(`/posts/${postId}`)
    }

    return (
        <>
            {showDeleteModal && (
                <Modal onClose={() => setShowDeleteModal(false)}>
                    <div>
                        <label>Are you sure?</label>
                        <form onSubmit={handleSubmit}>
                            <button type="submit">Confirm</button>
                        </form>
                        <button onClick={() => setShowDeleteModal(false)}>
                            Cancel
                        </button>
                    </div>
                </Modal>
            )}
        </>
    );
}

export default DeleteCommentModal;
