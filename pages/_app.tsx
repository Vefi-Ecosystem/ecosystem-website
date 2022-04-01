import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import Layout from '../components/Layout'

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <Layout>
//     <Component {...pageProps} />

//   </Layout>
import dynamic from 'next/dynamic';


const GlobalContextProvider = dynamic(
  () => import('../context/globalContext'),
  {ssr:false}
)


function MyApp({ Component, pageProps }: AppProps) {


  return (
    <>
      <GlobalContextProvider>
          <Component {...pageProps} />
      </GlobalContextProvider>
    </>
  )
}

export default MyApp
