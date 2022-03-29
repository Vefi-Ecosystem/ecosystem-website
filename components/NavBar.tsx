import Image from 'next/image'
import {ActiveLink} from '../components/Link/index'
import Logo from '../assets/images/vefilogo.png'
import Slash from '../assets/images/slash.png'
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
  click : boolean;
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
         
                <Link href='/' >Home</Link>
          
          </div>
          <div className='link'>
          
                  <Link  href='/'>Partners</Link>
          
          </div>
          <div className='link'>
           
            <Link href='/'>
                Products
           </Link>
            
           
          </div>
          <div className='link'>
          
                <Link href='/'>Team</Link>
           
          </div>
          
        
        </NavLinks>
      </Div>
   <Sec>
     <Div1>
       <BiMenuAltLeft className='icon' onClick={handleClick}/>
     </Div1>

     <Div2>
  
                <Link  href='/'>
                    <a>
                    <Image src={Logo}/>
                    </a>
                  </Link>
           
       
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