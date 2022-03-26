import React from 'react'
import {FiMoon, FiSun} from 'react-icons/fi'
import styled from 'styled-components'

const ThemeSwitcherStyles = styled.div`
    label{
        --gap: 5px;
        --size: 23px;
        height:30px ;
        width:60px ;
        padding:0 7px ;
        display:flex ;
        align-items:center ;
        justify-content: space-between;
        box-shadow: inset 0px 4px 7px 4px #DDDDDD;
        position:relative ;
        cursor: pointer;
        border-radius:23px ;
        z-index:1 ;

        .icon{
            height:var(---size) ;
            width:var(---size) ;
            display: flex;
            align-items:center ;
            justify-content:center ;

        }

        svg{
            width: 90%;
            color: black;
            
        }
    }

    input{
         width: 0;
        height:0 ;
        display: none;
        visibility: hidden  ; 
    } 

   label::after{
       position:absolute ;
       content:'' ;
       border-radius:50% ;
       transform: translateY(-50%) ;
       top:50% ;
       height:23px;
       width: 23px;
       left:4px ;
       background: #EEEEEE;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(255, 255, 255, 0.25);
       z-index:-1 ;
       transition:  0.2s ease left ;
   }
   input:checked + label::after{
       left: calc(100% - var(--size) - 4px);
   }
`

function ThemeSwitcher() {
  return (
    <ThemeSwitcherStyles>
        <input type="checkbox" id='switcher' />
        <label htmlFor="switcher">
            <div className='icon'>
            <FiSun/>
            </div>
            <div className='icon'>
            <FiMoon/>
            </div>
        </label>
    </ThemeSwitcherStyles>
  )
}

export default ThemeSwitcher