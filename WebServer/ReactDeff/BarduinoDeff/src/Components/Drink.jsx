import styled, { css } from 'styled-components';
import SquareDrink from './SquareDrink';

const DivDrink = styled.div`
    width: 50%;
    margin-top: 20%;
`;

function Drink() {
  return (
    <>
    <DivDrink>  
         <SquareDrink/>
    </DivDrink>
    </>
  )
}

export default Drink
