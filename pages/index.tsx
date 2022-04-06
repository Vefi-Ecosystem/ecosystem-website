import type { NextPage } from 'next'
import Head from 'next/head';
import Layout from '../components/Layout';
import NavBar from '../components/Navbar/Navbar';
import Hero from '../components/Home/Hero';
import Partners from '../components/Partners/Partners';
import About1 from '../components/About/About1';
import About2 from '../components/About/About2';
import About3 from '../components/About/About3';
import About4 from '../components/About/About4';
import Products from '../components/Products/Products';
import Team from '../components/Team/Team'
import Footer from '../components/Footer';


const Home: NextPage = () => {
  return (
    <Layout>
      <div >
        <Head>
          <title>Home Page  - VeFi Ecosystem</title>
          <meta name="description" content="Vefi ecosystem" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar/>
        <main >
        <Hero/>
        {/* <Partners/> */}
        <About1/>
        <About2/>
        <About3/>
        <About4/>
        <Products/>
        <Team/>
        <Footer/>
        </main>

       
      </div>
    </Layout>
  )
}

export default Home
