import React, { useState }from 'react'
import {
    Container
} from '../styles/Tabs.style'

interface Props {
    index : number
}
function Tabs() {
    const [toggle, setToggle] = useState(1);
    const toggleTab = (index: React.SetStateAction<number>) =>{
      setToggle(index)
    }
  return (
    <Container>
        <div className="tab-block">
          <div className='tab-seg'>
          <div 
          className={toggle ===1 ? 'tabs  active-tab' : 'tabs'}
           onClick={() => toggleTab(1)}>
                BlockChain
            </div>
            <div 
             className={toggle ===2  ? ' tabs active-tab' : 'tabs'}
            onClick={() => toggleTab(2)}>
                3swap
            </div>
            <div
             className="tabs" onClick={() => toggleTab(3)}>
                Wallet
            </div>
            <div className="tabs"
            onClick={() => toggleTab(4)}>
                Block Explorer
            </div>
          </div>
           <div className='tab-seg'>
           <div className="tabs"
           onClick={() => toggleTab(5)}>
                Exchange
            </div>
            <div className="tabs"
            onClick={() => toggleTab(6)}>
                CTV
            </div>
            <div className="tabs"
            onClick={() => toggleTab(7)}>
                NFT MARKETPLACE
            </div>
            <div className="tabs"
            onClick={() => toggleTab(8)}>
                ALTERVERSE
            </div>
           </div>
        </div>
        <div className="tab-content">
            <div className="content active-content">lorem1</div>
            <div className="content">lorem2</div>
            <div className="content">lorem3</div>
            <div className="content">lorem4</div>
            <div className="content">lorem5</div>
            <div className="content">lorem6</div>
            <div className="content">lorem7</div>
            <div className="content">lorem8</div>
        </div>
    </Container>
  )
}

export default Tabs