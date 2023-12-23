import styled, { css } from 'styled-components';
import Drink from "./Drink.jsx"

const DivRigaDrink = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-self: start;
    justify-content: space-between;
`


function RigaDrink() {
  return (
    <>
    <DivRigaDrink>  
        <Drink/>
        <Drink/>
        <Drink/>
        <Drink/>
        <Drink/>
        <Drink/>
        <Drink/>
        <Drink/>
        <Drink/>
        <Drink/>
        <Drink/>
        <Drink/>
        <Drink/>
        <Drink/>
        <Drink/>
        <Drink/>
        <Drink/>
        <Drink/>
        
    </DivRigaDrink>
    </>
  )
}

export default RigaDrink
