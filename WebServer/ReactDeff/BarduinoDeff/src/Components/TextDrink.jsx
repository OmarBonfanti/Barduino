import styled, { css } from 'styled-components';

const TxtDrink = styled.div`
    margin-top: 10px;
    color: #000000;
    font-family: "LEMON MILK-Bold", Helvetica;
    font-size: 100%;
    font-weight: 700;
    height: 50px;
    left: 0;
    letter-spacing: 0;
    line-height: 25px;
    position: absolute;
    text-align: center;
    bottom: 10px;
    width: 100%;
    overflow-wrap: break-word; 
`;

function TextDrink() {
  return (
    <>
     <TxtDrink>
       Disaronno Ananas
    </TxtDrink>
    </>
  )
}

export default TextDrink
