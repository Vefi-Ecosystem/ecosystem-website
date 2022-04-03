import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
background: rgba(0, 0, 0, 0.58);
margin-top:40px ;
padding:90px 50px ;
position: relative;
display:flex;
flex-direction:column ;
justify-content:flex-start ;

`
const BigT = styled.div` 
font-size: 43px;
line-height: 50px;
text-transform: capitalize;
color: #FFFFFF;
margin-bottom:20px ;
`
const SmallT = styled.div` 
font-size: 22px;
line-height: 26px;
display: flex;
align-items: center;

color: #8F8F8F;


`

function Addr() {
  return (
    <Container id="address">
        <BigT>
        Addressing this problem is the core ideology <br/> behind the emergence of Vefi Ecosystem
        </BigT>
        <SmallT>
        Beautiful as this might look for the continent, it is discomforting that it maintains <br/>this position primarily as the consumer continent without significant level of <br/>indigenous blockchain projects of its own.
        </SmallT>

    </Container>
  )
}

export default Addr