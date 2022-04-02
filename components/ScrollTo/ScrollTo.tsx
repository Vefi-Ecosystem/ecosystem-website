import React from 'react'
import styled from 'styled-components'
import { FiArrowDown } from 'react-icons/fi'
import { lightTheme, darkTheme } from '../../themes'

const Container = styled.div` 
padding:20px 0 ;
    display: flex;
    align-items:center ;
    justify-content:center ;
    cursor: pointer;

div{
    display: flex;
    align-items:center ;
    justify-content:center ;
    width: 60px;
height: 60px;
border-radius: 50%;
background: #F2F2F2;
box-shadow: ${(props: any) => props.theme.scrollBoxShadow};


font-size:25px ;
color:rgba(16, 93, 207, 1) ;
/* transform: rotate(-90deg) */
}
`

function Scroll() {
  return (
    <Container>
    <div>
        <FiArrowDown/>
    </div>

    </Container>
  )
}

export default Scroll