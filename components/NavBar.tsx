import Image from 'next/image'
import {ActiveLink} from '../components/Link/index'
import Logo from '../assets/vefilogo.png'
import Slash from '../assets/slash.png'
import ThemeSwitcher from './ThemeSwitcher'
import { BiMenuAltLeft} from 'react-icons/bi'
import { FaTimes} from 'react-icons/fa'
import React, { useState } from 'react'
import
{
  Div,
  Div1,
    Div2,
    Div3,
    Nav,
    NavLinks,
    Sec
}

 from '../styles/NavBar.styles'
import Link from 'next/link'

 type DivProps= {
  click : boolean
}



function NavBar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  
  return (
    
    <Nav >
      
      <Div click={click}>
        
        <NavLinks onClick={handleClick} >
          <div className='icon-pack'>
            <FaTimes/>
          </div>
          <div className='link'>
          <ActiveLink >
                <Link href={''} >Home</Link>
           </ActiveLink>
          </div>
          <div className='link'>
          <ActiveLink>
                  <Link  href={''}>Partners</Link>
           </ActiveLink>
          </div>
          <div className='link'>
            <ActiveLink>
            <Link href={''}>
                Products
           </Link>
            </ActiveLink>
           
          </div>
          <div className='link'>
          <ActiveLink>
                <Link href={''}>Team</Link>
           </ActiveLink>
          </div>
          
        
        </NavLinks>
      </Div>
   <Sec>
     <Div1>
       <BiMenuAltLeft className='icon' onClick={handleClick}/>
     </Div1>

     <Div2>
     <ActiveLink>
                <Link  href={''}>
                    <a>
                    <Image src={Logo}/>
                    </a>
                  </Link>
           </ActiveLink>
       
      </Div2>
   
      <Div3>
      <div className='join'>
     <div> Join our community</div>
     <div className='slash'>
       <Image src={Slash}/>
     </div>
      </div>
       <ThemeSwitcher/>
      </Div3>
      </Sec>


      
    </Nav>
  )
}

export default NavBar