import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { Modal } from '../../../context/Modal';
import { deletePost } from '../../../store/posts';

function DeletePostModal({ user_id, showDeletePostModal, setShowDeletePostModal}){
const history = useHistory()
const dispatch = useDispatch()
const { postId } = useParams();

const handleClick = async (e) => {
    e.preventDefault();
    setShowDeletePostModal(false)
    let res = await dispatch(deletePost(postId))

    if (res){
        history.push(`/users/${user_id}`)
    }

}
return (
    <>
        {showDeletePostModal && (
            <Modal onClose={() => setShowDeletePostModal(false)}>
                <div className="submit-comment-form">
                    <button className="secondary-button" onClick={handleClick}>Confirm</button>
                    <button className="secondary-button" onClick={() => setShowDeletePostModal(false)}>
                        Cancel
                    </button>
                </div>
            </Modal>
        )
        }
    </>
);
}

export default DeletePostModal
