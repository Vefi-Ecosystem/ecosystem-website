import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  background: url(img/section_img.png) no-repeat center;
  background-blend-mode: multiply;
  margin-top:40px ;
  padding:90px 50px ;
  position: relative;
  display:flex;
  flex-direction:column ;
  justify-content:flex-start;

@media screen and (max-width:900px){
    padding:20px ;
  }


.desktop-tablet{
  

  @media screen and (max-width:900px){
    display:none ;
  }
}

.mobile{
  display: none;
  position: relative;
  overflow:hidden ;
  padding-top:56.25% ;

  @media screen and (max-width:900px){
    display:block ;
  }


  iframe{
    position:absolute ;
    top:0 ;
    left:0 ;
    width:100% ;
    height:100% ;
  }
}

`
const BigT = styled.div` 
font-size: 43px;
line-height: 50px;
text-transform: capitalize;
color: #FFFFFF;
margin-bottom:20px ;
font-family:Gilroy-Bold;
`
const SmallT = styled.div` 
font-size: 22px;
line-height: 26px;
display: flex;
align-items: center;
font-family:Gilroy-Medium;
color: #8F8F8F;
font-family:Gilroy-Medium;

`

function About1() {
  return (
    <Container id='about2'>
      <div className='desktop-tablet'>
        <BigT>
          Addressing this problem is the core ideology <br /> behind the emergence of Vefi Ecosystem
        </BigT>
        <SmallT>
          Beautiful as this might look for the continent, it is discomforting that it maintains <br />this position primarily as the consumer continent without significant level of <br />indigenous blockchain projects of its own.
        </SmallT>
      </div>
      <div className='mobile'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/cS07s5zfYAI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <video src=""></video>
      </div>

    </Container>
  )
}

export default About1