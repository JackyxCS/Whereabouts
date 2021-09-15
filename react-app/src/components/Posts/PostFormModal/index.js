import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import CreatePostForm from '../CreatePostForm'

function PostFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="primary-button login-button" onClick={() => setShowModal(true)}>Share your Mission!</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreatePostForm />
        </Modal>
      )}
    </>
  );
}

export default PostFormModal;
