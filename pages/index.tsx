import type { NextPage } from 'next'
import Head from 'next/head';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import LogoSlide from '../components/LogoSlide';
import DescSec from '../components/DescSec';
import Addr from '../components/Addr';
import Rev from '../components/Rev';
import Chang from '../components/Chang';
import Tabs from '../components/Tabs';
import Scroll from '../components/Scroll';


const Home: NextPage = () => {
  return (
    <Layout>
      <div >
        <Head>
          <title>Home Page  - Vefi ecosystem</title>
          <meta name="description" content="Vefi ecosystem" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar/>
        
        

        <main >
        <Hero/>
        <LogoSlide/>
        <DescSec/>
        <Scroll/>
        <Addr/>
        <Rev/>
        <Chang/>
        <Tabs/>

         

         
          
        </main>

       
      </div>
    </Layout>
  )
}

export default Home
