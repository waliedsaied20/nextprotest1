// import { Fragment } from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
function AllEvetnList({ allEvents }) {
    // To go to Filter and Update Page Sports Categary
    const router = useRouter()
    // Here to update Data to make filter with useState 
    const [SportsOnly , setdSportsOnly] = useState(allEvents)
    const handleSportsOnly  = async () => {
        const responseSport = await fetch('http://localhost:4000/events?categary=sport');
        const getSport = await responseSport.json();
        setdSportsOnly(getSport);
        router.push('/events?categary=sport', undefined ,{shallow: true})
    }
  
    return (

        <>
            <button onClick={handleSportsOnly} className=" bg-red-500 font-bold text-2xl text-white">Get Only Sports</button>
            <h2 className="text-center font-bold text-2xl text-purple-500 underline">Welcome To Show All Events From Events Page</h2>
            {SportsOnly.map((event) => { 
                return (
                    <div key={event.ID}>
                        <h1>Id : {event.ID}</h1> 
                        <h2>Name is : {event.Name}</h2>
                        <h2>Email is : {event.Email}</h2>
                        <h2>Website is : {event.Website}</h2>
                        <h2>categary is : {event.categary}</h2>
                        <hr  className="h-2 border-red-900 border-t-8"/>
                    </div>
                )
            })}
            <div className="text-red-500 font-bold text-2xl">
                Go to <Link href='dashboard-swr'  >Dashboard SWR</Link>
            </div>
        </>
    )
}
export default AllEvetnList;

// I useing context to path value and get it from query and added to Link after events
export async function getServerSideProps(context) {
    const {query} = context;
    const {categary} = query;
    const queryString = categary ? 'categary=sport' : ''
    const responseData = await fetch(`http://localhost:4000/events?${queryString}`);
    const dataGet = await responseData.json();

    return {
        props: {
            allEvents: dataGet,
        }
    }
}