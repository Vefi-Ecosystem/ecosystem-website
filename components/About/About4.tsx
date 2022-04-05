import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Chan from '../../assets/images/chang.png'

const Container = styled.div`
padding: 100px 0 0 50px;
display:flex ;
align-items: center;
justify-content: space-between;



.title-desc{


  @media screen and (max-width:900px){
  position:absolute;
z-index :2 ;
bottom: 20px;
height:100% ;
width:90% ;
display:flex ;
flex-direction:column ;
justify-content:flex-end ;
align-items:center ;
background: linear-gradient(180deg, rgba(29, 29, 29, 0) 24.81%, rgba(29, 29, 29, 0.636364) 46.07%, #1D1D1D 71.64%);



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
    <Container id='change_sec'>
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