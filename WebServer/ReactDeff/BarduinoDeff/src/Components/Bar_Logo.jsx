import styled, { css } from 'styled-components';
import RigaDrink from './RigaDink';
import img from '../../public/Logo_Def.png'

const Scroll = styled.div`
    overflow-y: scroll;
    max-height: 100vh;
`

const DivUnderLogo  = styled.div`
    height: 100%;
    top: 25%; /* Adjust this value to match the height of the element above */
    width: 100%;
`

const Divlogo = styled.div`
    width: 100vw;
    height: 25vh; /* Auto expand in height */
    background-image: url(${img}); /* Add the URL to your image */
    background-size: cover; /* Ensures the image covers the entire Navbar */
    background-position: center; /* Centers the image */
    color: white;
    position: relative;
    top: 0;
    left: 0;
    z-index: 0;
`


function Bar_logo() {
  return (
    <>

    <Scroll>
        <Divlogo/>
        <DivUnderLogo>
            <RigaDrink/>
        </DivUnderLogo>
    </Scroll>
    
        
    
    </>
  )
}

export default Bar_logo
