import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import CreatePostForm from '../CreatePostForm'

function PostFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="primary-button login-button" onClick={() => setShowModal(true)}>Create Post</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreatePostForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default PostFormModal;
