import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import Cosmic from '../assets/images/cosmic.png'
import Microsoft from '../assets/images/microsoft.png'
import Miro from '../assets/images/miro.png'
import Polaroid from '../assets/images/polariod.png'
import Spacex from '../assets/images/space-x.png'
import Stanford from '../assets/images/stanford.png'
import Ycombi from '../assets/images/ycombi.png'

const Container = styled.div`
margin:40px 0 ;
background: #DDDDDD;
/* padding ; */
display:flex ;
align-items:center ;
justify-content:space-between ;
overflow-x:  scroll;
::-webkit-scrollbar{
    display: none;
}

div{
    display:flex ;
align-items:center ;
justify-content:center ;
    margin: 0px 20px;
    min-width:  100px;
    padding: 20px 0;
}
`

function LogoSlide() {
  return (
    <Container>
        <div>
            <Image src={Cosmic}
            alt='Partners'/>
        </div>
        <div>
            <Image src={Microsoft}
             alt='Partners'/>
        </div>
        <div>
            <Image src={Miro}
             alt='Partners'/>
        </div>
        <div>
            <Image src={Polaroid}
             alt='Partners'/>
        </div>
        <div>
            <Image src={Spacex}
             alt='Partners'/>
        </div>
        <div>
            <Image src={Stanford}
             alt='Partners'/>
        </div>
        <div>
            <Image src={Ycombi}
             alt='Partners'/>
        </div>

    </Container>
  )
}

export default LogoSlide