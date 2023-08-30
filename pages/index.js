import Head from "next/head";
import Link from "next/link";


// Edit left Branch
function HomePage() {
  return (
<<<<<<< HEAD
    // Edit page with Leftbranch
    <>
   <Head>
    <title>Edit Page with Left branch</title>
          <title>Welcome ! render 1 </title>
=======
    // Edit wit rightbranch
    <>
   <Head>
    
    <title>this box with branch rightbranch</title>
          <title>Welcome ! render</title>
>>>>>>> 50a158f (eidt page with rightbranch)
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