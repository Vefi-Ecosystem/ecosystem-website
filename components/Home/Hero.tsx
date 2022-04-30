/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import { HeroText, ImageCon, Container, Button } from '../../styles/Hero.style';
import Image from 'next/image';
import { FiArrowDown } from 'react-icons/fi';

import { GlobalContext } from '../../context/globalContext';

const lighthero_bg = '/images/light_hero_bg.png';
const darkhero_bg = '/images/dark_hero_bg.png';

function Hero() {
  const [imgDir, setImgDir] = useState(lighthero_bg);
  const currentTheme = useContext(GlobalContext);

  const { theme } = currentTheme;
  function themeCheck() {
    if (theme === 'dark') {
      setImgDir(darkhero_bg);
    } else {
      setImgDir(lighthero_bg);
    }
  }

  useEffect(() => {
    themeCheck();
  }, [theme]);

  return (
    <Container id="hero">
      <HeroText>
        <div className="heading">
          <h1 className="welcome">
            Welcome to the <span className="ecosystem">Vefi Ecosystem</span>
          </h1>
          {/* <h1 className='ecosystem'></h1> */}
        </div>

        <div>
          <p className="brief">
            {' '}
            Vefi is an ecosystem of blockchain-intrinsic products and services with the sole aim of permeating all areas
            of the globe with its influence in the blockchain ecosystem.
          </p>
        </div>
        <div className="but-div">
          <a href="#about1">
            <Button>
              Explore Ecosystem <FiArrowDown className="icon" />
            </Button>
          </a>
        </div>
      </HeroText>
      <ImageCon>
        <Image src={imgDir} width={500} height={514} alt="Ecosystem" />
      </ImageCon>
    </Container>
  );
}

export default Hero;
