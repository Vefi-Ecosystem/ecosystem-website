import React, { useState, useContext, useEffect } from 'react'
import {
  HeroText,
  ImageCon,
  Container,
  Button,
} from '../../styles/Hero.style'
import Image from 'next/image'
import { FiArrowDown } from 'react-icons/fi'
import darkHero_bg from '../../assets/images/dark_hero_bg.png'
import lighthero_bg from '../../assets/images/light_hero_bg.png'

import { GlobalContext } from '../../context/globalContext';


function Hero() {
  const [imgDir, setImgDir] = useState(lighthero_bg);
  const currentTheme = useContext(GlobalContext);
  
  const { theme } = currentTheme
  function themeCheck(){
    if(theme === 'dark'){
      setImgDir(darkHero_bg)
    } else{
      setImgDir(lighthero_bg)
    }
  }

  useEffect(()=>{
    themeCheck()
  },[theme])

  return (
    <Container id="hero">
      <HeroText>

        <div>
          <h1 className='welcome'>Welcome to the</h1>
          <h1 className='ecosystem'>Ecosystem</h1>
        </div>

        <div>
          <p>  Our ecosystem of blockchain-intrinsic products and <br /> services with the sole aim of permeating all areas of the <br /> globe with its influence in the blockchain ecosystem.</p>
        </div>
        <div className='but-div'>
          <Button>Explore Ecosystem <FiArrowDown className='icon' /></Button>

        </div>


      </HeroText>
      <ImageCon>
        <Image src={imgDir} alt='Ecosystem' />

      </ImageCon>
    </Container>
  )
}

export default Hero