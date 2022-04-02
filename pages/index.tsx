import type { NextPage } from 'next'
import Head from 'next/head';
import Layout from '../components/Layout';
import NavBar from '../components/Navbar/Navbar';
import Hero from '../components/Home/Hero';
import Partners from '../components/Partners/Partners';
import About1 from '../components/About/About1';
import About2 from '../components/About/About2';
import About3 from '../components/About/About3';
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
        <About1/>
        <Scroll/>
        <About2/>
        <About3/>
        <Chang/>
        <Tabs/>

         

         
          
        </main>

       
      </div>
    </Layout>
  )
}

export default Home
