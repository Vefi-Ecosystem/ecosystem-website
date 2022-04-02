import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Chan from '../../assets/images/chang.png'

const Container = styled.div`
padding: 100px 0 0 50px;
display:flex ;
align-items: center;
justify-content: space-between;

&::before{
  content:'' ;
  height:100% ;
  width:100% ;
  background: red;
  z-index:2 ;
}

.title-desc{


  @media screen and (max-width:900px){
  position:absolute;
z-index :2 ;
bottom: 30px;
width:90% ;
display:flex ;
flex-direction:column ;
justify-content:center ;
align-items:center ;
}
}

@media screen and (max-width:900px){
  position:relative ;
  overflow:hidden ;
  flex-direction:column-reverse ;
  padding:20px  ;
  justify-content: center;

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
text-align:center ;
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
  margin-top:10px ;
  font-size: 15px;
line-height: 20px;
text-align:center ;

}

`

function About4() {
  return (
    <Container>
      <div className='title-desc'>
      <Title>
          Changing the world’s future <br/>  through Blockchain
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

export default About4