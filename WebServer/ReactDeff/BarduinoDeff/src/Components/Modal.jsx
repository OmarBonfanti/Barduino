import styled, { css } from 'styled-components';
import Modal from 'react-modal';
import React, { useState } from 'react';




const MyModal = ({ isOpen, onRequestClose }) => {


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
    >
      <h2>Modal Content</h2>
      <p>Hello, I'm a modal!</p>
      <button onClick={onRequestClose}>Close </button>
    </Modal>
  );
};


export default MyModal

