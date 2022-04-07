import Image from 'next/image';
import ThemeSwitcher from '../ThemeSwitch/index';
import { BiMenuAltLeft } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import React, { useState } from 'react';
import { Div, Div1, Div2, Div3, Nav, NavLinks, Sec } from '../../styles/NavBar.styles';
import Link from 'next/link';
import Vefi_logo from '../../public/images/vefilogo.png'
import slash from '../../public/images/slash.png'

type DivProps = {
  click: boolean;
};

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Nav>
      <Div click={click}>
        <NavLinks onClick={handleClick}>
          <div className="icon-pack">
            <FaTimes />
          </div>
          <div className="link">
            <Link href="#">
              <a>Home</a>
            </Link>
          </div>
          <div className="link">
            {/* <Link href="/">
              <a>Partners</a>
            </Link> */}
          </div>
          <div className="link">
            <Link href="#products">Products</Link>
          </div>
          <div className="link">
            <Link href="#team">Team</Link>
          </div>
        </NavLinks>
      </Div>
      <Sec>
        <Div1>
          <BiMenuAltLeft className="icon" onClick={handleClick} />
        </Div1>

        <Div2>
          <Link href="/">
            <a>
              <Image src={Vefi_logo} alt="Logo" />
            </a>
          </Link>
        </Div2>

        <Div3>
          <div className="join">
            <div>
              <Link href="/">
                <a href="https://t.me/vefi_official" target="_blank" rel="noreferrer">
                  {' '}
                  Join our community
                </a>
              </Link>
            </div>
            <div className="slash">
              <Image src={slash} alt="decor"/>
            </div>
          </div>
          <ThemeSwitcher />
        </Div3>
      </Sec>
    </Nav>
  );
}

export default NavBar;
