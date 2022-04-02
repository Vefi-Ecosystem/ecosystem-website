import type { NextPage } from 'next'
import Head from 'next/head';
import Layout from '../components/Layout';
import NavBar from '../components/Navbar/Navbar';
import Hero from '../components/Home/Hero';
import Partners from '../components/Partners/Partners';
import DescSec from '../components/DescSec';
import Addr from '../components/About/Addr';
import Rev from '../components/Rev';
import Chang from '../components/Chang';
import Tabs from '../components/Products/Products';
import Scroll from '../components/ScrollTo/ScrollTo';


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
        <Partners/>
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
