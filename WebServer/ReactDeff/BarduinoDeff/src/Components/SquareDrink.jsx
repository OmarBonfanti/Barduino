import styled, { css } from 'styled-components';
import FotoDrink from './FotoDrink';
import TextDrink from './TextDrink';
import React, { useState } from 'react';
import MyModal from './Modal';


const Square = styled.div`
    width: 30vw;
    height: 30vw;
    left: 50%;
    position: relative;
    top: 50%;
    transform: translate(-50%, -50%);

    background-color: white;
    border-radius: 10px; /* adjust as needed */
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;




function SquareDrink() {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
 

  return (
    <>
    <Square onClick={openModal} >  
       <FotoDrink/>
       <TextDrink/>
    </Square>
   
    

      <MyModal isOpen={isModalOpen} onRequestClose={closeModal} />
   
    </>
  )
}

export default SquareDrink
