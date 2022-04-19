import type { NextPage } from 'next';
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

const Home: NextPage = () => {
  return (
    <Layout>
      <div>
        <Head>
          <title>Vefi | Blockchain infrastructure and solution providing firm.</title>
          <meta name="description" content="Vefi is building the future of web 3 for massive Blockchain adoption!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar />

        <main>
          <Hero />
          <LogoSlide />
          <DescSec />
          <Addr />
          <Rev />
          <Chang />
          <Tabs />
        </main>
      </div>
    </Layout>
  );
};

export default Home;
