import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Revo from '../assets/images/revo.png'
import Scroll from './Scroll'

const Container = styled.div`
padding: 100px 50px 0 50px;
display:flex ;
flex-direction: row-reverse ;
align-items: center;
justify-content: space-between;



@media screen and (max-width:900px){
flex-direction: column;
padding:20px ;

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
margin-bottom: 20px;
}


`

function Rev() {
  return (
    <Container>
      <div>
      <Title>revolutionizing Innovation <br/> 
in the Blockchain Technology <br/> Globally</Title>
        <Desc>
        Our Vision is to be the global leader for <br/> institutional and mass adoption by providing <br/> blockchain infrastructure and solutions.        </Desc>
        
        <Scroll justifyContent="flex-start" url="#change_section" />
      </div>
      <div>
          <Image src={Revo}
             alt='Explanatory image'
          height= {546}
          width = {480}
          />
      </div>

    </Container>
  )
}

export default Rev