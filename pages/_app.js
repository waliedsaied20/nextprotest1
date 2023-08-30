import '@/styles/globals.css'
import NavbarRender from './navbar'
import Head from 'next/head'


export default function App({ Component, pageProps }) {

  return (
    <>
        <Head>
          <title>{Component}</title>
          <link rel="icon" type="image/png" href="homeicon.png"/>
      </Head>
      <NavbarRender />
    <Component {...pageProps} />
    </>
    )
    
}
