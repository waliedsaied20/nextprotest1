import Head from "next/head";
import Link from "next/link";

function HomePage() {
  return (
    // Edit wit rightbranch
    <>
   <Head>
    
          <title>Welcome ! render</title>
          <link rel="icon" type="image/png" href="homeicon.png"/>
      </Head>
      <div>
        <h2>Welcome T o fFix Page Again <span className="text-red-500 border p-2 bg-gray-400 rounded-full"> Here</span></h2>
        <h1>  Welcome ! back to Home Page</h1>
        <hr />
        <Link href='/users'>
          Users
        </Link>
        <hr />
        <p> lorem ipsum ahmed mohamed saied ibrahim walied hassan  </p>
      </div>
    </>
  )
}

export default HomePage;