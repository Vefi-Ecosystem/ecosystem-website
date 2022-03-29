import React from 'react'
import { 
  HeroText,
  ImageCon,
  Container,
  Button,
} from '../styles/Hero.style'
import Image from 'next/image'
import Door from '../assets/images/door.png'
import {FiArrowDown} from 'react-icons/fi'

function Hero() {
  return (
    <Container>
        <HeroText>
       
           <div>
           <h1 className='welcome'>Welcome to the</h1>
            <h1 className='ecosystem'>Ecosystem</h1>
           </div>
          
           <div>
               <p>  Our ecosystem of blockchain-intrinsic products and <br/> services with the sole aim of permeating all areas of the <br/> globe with its influence in the blockchain ecosystem.</p>
           </div>
         <div className='but-div'>
         <Button>Explore Ecosystem <FiArrowDown className='icon'/></Button>

         </div>

           
        </HeroText>
        <ImageCon>
          <Image src={Door}/>

        </ImageCon>
    </Container>
  )
}

export default Hero