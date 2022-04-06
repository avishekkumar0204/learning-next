import '../styles/globals.css'
import Navbar from '../component/Navbar'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
       
        <script src="https://cdn.tailwindcss.com"></script>

      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
