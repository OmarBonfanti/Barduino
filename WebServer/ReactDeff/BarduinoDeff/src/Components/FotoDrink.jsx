import styled, { css } from 'styled-components';
import cubalibre from '/public/cuba libre.png';

const FotoDim = styled.img`
    width: 90%;
    align-self: center;
    margin-top: -150px; 
`;

function FotoDrink() {
  return (
    <>
       
        <FotoDim src="../public/cuba libre.png" alt="" />
       
    </>
  )
}

export default FotoDrink
