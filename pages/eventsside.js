import { useState } from "react";
import { useRouter } from "next/router";

function DataList({ allDataFetched }) {
    const [eventsData, setEventsData] = useState(allDataFetched);
    const router = useRouter()
    const fetchSportsOnly = async () => {
        const responseData = await fetch('http://localhost:4000/events?categary=sport')
        const dataCache = await responseData.json();
        setEventsData(dataCache);
        router.push('/events?categary=sport' , undefined, {shallow: true})

    }

    return (
        <>
            <div>List of Events </div>

            {allDataFetched.map((event) => {
                return (
                    <div key={event.ID}>
                        <div>
                            {event.Name} | {event.Email} {event.Website}
                        </div>
                        <p>
                            {event.categary}
                        </p>
                        <hr className="border border-b-8 border-green-400"/>
                    </div>
                )
            })}
                        <button onClick={fetchSportsOnly} className="p-3 bg-yellow-400 text-blue-500 rounded-xl text-center font-bold">
                            Filter Sports 
                        </button>

        </>
    )

}
export default DataList;

export async function getServerSideProps(textcontent) {
    const { query } = textcontent;
    const { categary } = query;
    const queryString = categary ? 'categary=sport' : '';
    const responseData = await fetch(`http://localhost:4000/events?${queryString}`);
    const data = await responseData.json();

    return {
        props: {
            allDataFetched: data
        }
    }

}