import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Chan from '../assets/images/chang.png'

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

function Chang() {
  return (
    <Container>
      <div>
      <Title>
          Changing the world’s future through <br/> Blockchain
        </Title>
        <Desc>
        To build and deploy innovative, cutting <br/> edge and scalable Blockchain solutions.
        </Desc>
      </div>
      <div>
          <Image src={Chan}
          alt='Explanatory image'
          height= {546}
          width = {550}
          />
      </div>

    </Container>
  )
}

export default Chang