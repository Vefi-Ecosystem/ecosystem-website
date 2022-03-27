import React from 'react'
import { 
  HeroText,
  ImageCon,
  Container
} from '../styles/Hero.style'
import Image from 'next/image'
import Door from '../assets/door.png'

function Hero() {
  return (
    <Container>
        <HeroText>
       
           <h1 className='welcome'>Welcome to the</h1>
            <h1 className='ecosystem'>Ecosystem</h1>
          
           <div>
               <p>  Our ecosystem of blockchain-intrinsic products and <br/> services with the sole aim of permeating all areas of the <br/> globe with its influence in the blockchain ecosystem.</p>
           </div>
        </HeroText>
        <ImageCon>
          <Image src={Door}/>

        </ImageCon>
    </Container>
  )
}

export default Hero