import Head from "next/head";
import Link from "next/link";


// Edit left Branch
function HomePage() {
  return (
    // Edit page with Leftbranch
    <>
   <Head>
    <title>Edit Page with Left branch</title>
          <title>Welcome ! render 1 </title>
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