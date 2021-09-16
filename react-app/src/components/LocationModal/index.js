import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LocationForm from './LocationForm';

function LocationFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="tertiary-button login-button" onClick={() => setShowModal(true)}>Update User Coordinates</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LocationForm />
        </Modal>
      )}
    </>
  );
}

export default LocationFormModal;
