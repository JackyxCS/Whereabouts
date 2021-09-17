import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import EditPost from '../EditPost'

function EditPostModal({postId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="edit-post"
      onClick={() => setShowModal(true)}>
     {/* <i className="fa fa-pencil edit-btn" aria-hidden="true"></i> */}
     Edit Description
</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditPost postId={postId} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default EditPostModal;
