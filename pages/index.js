import Head from 'next/head'
import ShowImages from '../component/ShowImages';
import ChatBox from '../component/ChatBox';
export default function Home({ photosArray }) {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      <div className='flex'>
        <ShowImages photosArray={photosArray} />
        <ChatBox photosArray={photosArray} />
      </div>


    </>
  )
}


export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos/?_limit=60");
  const data = await response.json();

  return {
    props: {
      photosArray: data
    }
  }
}

