/* eslint-disable @next/next/no-script-component-in-head */
import '../components/utils/embr';
import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import NavBar from '../components/Navbar/Navbar';
import Hero from '../components/Home/Hero';
// import Partners from '../components/Partners/Partners';
import About1 from '../components/About/About1';
import About2 from '../components/About/About2';
import About3 from '../components/About/About3';
import About4 from '../components/About/About4';
import Products from '../components/Products/Products';
import Team from '../components/Team/Team';
import Footer from '../components/Footer';
import Partners from '../components/Partners/Partners';
// import News from '../components/News/News';

const Home: NextPage = () => {
  return (
    <Layout>
      <div>
        <Head>
          <title>Vefi Ecosystem | Blockchain infrastructure &amp; solutions providing firm.</title>
        </Head>
        <NavBar />
        <main>
          <Hero />
          <Partners />
          <About1 />
          <About2 />
          <About3 />
          <About4 />
          <Products />
          <Team />
          {/* <News /> */}
          <Footer />
        </main>
      </div>
    </Layout>
  );
};

export default Home;
