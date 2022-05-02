import Image from 'next/image';
import ThemeSwitcher from '../ThemeSwitch/index';
import { BiMenuAltLeft } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import React, { useState } from 'react';
import { Div, Div1, Div2, Div3, Nav, NavLinks, Sec } from '../../styles/NavBar.styles';
import Link from 'next/link';
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
            <Link href="#products">Products</Link>
          </div>
          <div className="link">
            <Link href="#team">Team</Link>
          </div>
          <div className="link">
            <Link href="https://vefinew.netlify.app/">View One Pager</Link>
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
              <Image src="/images/vefilogo.png" alt="Logo" width={81} height={26} layout="fixed" />
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
              <Image src="/images/slash.png" width={150} height={9} alt="decor" />
            </div>
          </div>
          <ThemeSwitcher />
        </Div3>
      </Sec>
    </Nav>
  );
}

export default NavBar;
