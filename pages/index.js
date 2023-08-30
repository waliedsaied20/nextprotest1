import Head from "next/head";
import Link from "next/link";

function HomePage() {
  return (
    // Edit wit rightbranch
    <>
   <Head>
    
    <title>this box with branch rightbranch</title>
          <title>Welcome ! render</title>
          <link rel="icon" type="image/png" href="homeicon.png"/>
      </Head>
      <div>
        <h1>  Welcome ! back to Home Page</h1>
        <hr />
        <Link href='/users'>
          Users
        </Link>
      </div>
    </>
  )
}

export default HomePage;