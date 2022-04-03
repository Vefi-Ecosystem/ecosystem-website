import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Ether from '../assets/images/ethe.png'
import Scroll from './Scroll'

const Container = styled.div`
padding: 100px 0 0 50px;
display:flex ;
align-items: center;
justify-content: space-between;


@media screen and (max-width:900px){
  flex-direction:column-reverse ;
  padding:20px  ;
}


`
const Title = styled.div`
font-size: 46px;
line-height: 54px;
text-transform: capitalize;

color: ${(props: any) => props.theme.headerTextColor};

@media screen and (max-width:900px){
  margin-top:15px ;
  font-size: 20px;
line-height: 23px;
}
`
const Desc = styled.div`
margin-top: 30px;
font-size: 27px;
line-height: 32px;
/* or 119% */

display: flex;
align-items: center;

color: ${(props: any) => props.theme.regularTextColor};

br{

  @media screen and (max-width:900px){
display:none ;
}
}

@media screen and (max-width:900px){
  font-size: 15px;
line-height: 20px;
}

`

function DescSec() {
  return (
    <>
      <Container>
        <div>
          <Title>We are building one of <br />
            the largest Blockchain  <br /> Infrastructure and Solution <br /> company</Title>
          <Desc>
            Our Mission is to Improve the freedom of money <br /> globally through the integration of institutions, <br /> people, groups and businesses into the <br />Blockchain economy.
          </Desc>
        </div>
        <div>
          <Image src={Ether}
            alt='Explanatory image'
            height={546}
            width={550}
          />
        </div>
      </Container>
      <Scroll url="#address" />
    </>
  )
}

export default DescSec