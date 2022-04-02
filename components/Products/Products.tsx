import React, { useState }from 'react'
import {
    Container
} from '../../styles/Tabs.style'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {lightTheme, darkTheme} from '../../themes'

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
        <div className='prod'>
        Get familiar with our Products
        </div>
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
             className={toggle ===3  ? ' tabs active-tab' : 'tabs'}
             onClick={() => toggleTab(3)}>
                Wallet
            </div>
            <div
             className={toggle ===4  ? ' tabs active-tab' : 'tabs'}
             onClick={() => toggleTab(4)}>
                Block Explorer
            </div>
          </div>
           <div
            className='tab-seg'>
           <div 
             className={toggle ===5  ? ' tabs active-tab' : 'tabs'}
             onClick={() => toggleTab(5)}>
                Exchange
            </div>
            <div
             className={toggle ===6  ? ' tabs active-tab' : 'tabs'}
             onClick={() => toggleTab(6)}>
                CTV
            </div>
            <div 
             className={toggle ===7  ? ' tabs active-tab' : 'tabs'}
            onClick={() => toggleTab(7)}>
                NFT MARKETPLACE
            </div>
            <div
             className={toggle ===8  ? ' tabs active-tab' : 'tabs'}
             onClick={() => toggleTab(8)}>
                ALTERVERSE
            </div>
           </div>
        </div>
        <div className="tab-content">
            <div
                         className={toggle ===1  ? ' content active-content' : 'content'}
                >
                    <div className='content-img'>
                            
                    </div>
                    <div className='content-text'>
                        <div className='product-con'>
                          <div className="prod-log-con">
                          <div className='prod-log'>logs</div>
                            <div className='prod-title'>
                                BlockChain
                            </div>
                         
                          </div>
                          <div className="prod-desc">
                          3 Swap is a newly designed Decentralized 
exchange that makes decentralized trading 
fast with low transaction fees and traffic...
                          </div>
                          <div className="prod-btn">
                              <button>
                                  More details <HiOutlineArrowNarrowRight className ='icon'/>  
                              </button>
                          </div>
                        </div>
                    </div>
                </div>
                <div
                         className={toggle ===2  ? ' content active-content' : 'content'}
                >
                    <div className='content-img'>
                            
                    </div>
                    <div className='content-text'>
                        <div className='product-con'>
                          <div className="prod-log-con">
                          <div className='prod-log'>logs</div>
                            <div className='prod-title'>
                                3swap
                            </div>
                         
                          </div>
                          <div className="prod-desc">
                          3 Swap is a newly designed Decentralized 
exchange that makes decentralized trading 
fast with low transaction fees and traffic...
                          </div>
                          <div className="prod-btn">
                              <button>
                                  More details <HiOutlineArrowNarrowRight className ='icon'/>  
                              </button>
                          </div>
                        </div>
                    </div>
                </div>
                <div
                         className={toggle ===3  ? ' content active-content' : 'content'}
                >
                    <div className='content-img'>
                            
                    </div>
                    <div className='content-text'>
                        <div className='product-con'>
                          <div className="prod-log-con">
                          <div className='prod-log'>logs</div>
                            <div className='prod-title'>
                                Wallet
                            </div>
                         
                          </div>
                          <div className="prod-desc">
                          3 Swap is a newly designed Decentralized 
exchange that makes decentralized trading 
fast with low transaction fees and traffic...
                          </div>
                          <div className="prod-btn">
                              <button>
                                  More details <HiOutlineArrowNarrowRight className ='icon'/>  
                              </button>
                          </div>
                        </div>
                    </div>
                </div>
            <div
                         className={toggle ===4  ? ' content active-content' : 'content'}
                         >lorem4</div>
            <div
                         className={toggle ===5  ? ' content active-content' : 'content'}
                         >lorem5</div>
            <div 
                         className={toggle ===6  ? ' content active-content' : 'content'}
                         >lorem6</div>
            <div 
                         className={toggle ===7  ? ' content active-content' : 'content'}
                         >lorem7</div>
            <div 
                         className={toggle ===8  ? ' content active-content' : 'content'}
                         >lorem8</div>
        </div>
    </Container>
  )
}

export default Tabs