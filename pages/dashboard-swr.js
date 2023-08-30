import Link from 'next/link';
import useSWR from 'swr'

function DashboardBySwr() {
    const fether = async () => {
        // I Can Control Limite of get Data by ?_limit=33
        const response = await fetch('http://localhost:4000/dashboard')
        const data = await response.json();
        return data
    }

    const { data, error } = useSWR("dashboard", fether)

    if (error) {
        document.body.style.overflow = "hidden";
        return (
            <div className='bg-gray-500 w-full h-screen'>
                <div className=' font-bold fixed top-1/2 left-1/3 text-3xl text-orange-500'>
                    "Please Check Your URl Words "
                </div>
                <Link href='/' className='fixed top-2/4 mt-10 left-2/4
                 font-bold text-white text-xl 
                 bg-gray-400 p-3 rounded 
                 hover:bg-green-800'>Go Home Page </Link>
            </div>
        )
    }
    if (!data) return "Loading Data ......";

    return (
        <div className='text-blue-500 font-bold text-2xl'>
            <h2>Dashboard</h2>
            <h2>Posts: {data.posts}</h2>
            <h2>Liks: {data.liks}</h2>
            <h2>Followers: {data.followrs}</h2>
            <h2>Following: {data.following}</h2>
            <h2>Name 1: {data.users[0].name1} <br /> Name 2: {data.users[0].name2} <br /> Name 3: {data.users[0].name3}</h2>

            <div>
                <h1>Show All Events {'>'} Dashboard </h1>

                Show Events Here
                <Link href='/events' className='text-red-400'> Event</Link>
            </div>

        </div>
    )
}

export default DashboardBySwr;