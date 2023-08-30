import { useState, useEffect } from "react";

function Dashboard() {
    const [loadData , setLoadData] = useState(true)
    const [dashboardData , setDashboardData] = useState(null)

    useEffect(() => {
       async function fetchdashboard() {
            const response =  await fetch('http://localhost:4000/dashboard')
            const data = await response.json();
            setLoadData(false)
            setDashboardData(data)
        
        }
        fetchdashboard();        
    },[])
    
    if(loadData) {
        return <div className="font-bold text-4xl ">Loading....1</div>
    }

    return (
        <div className="font-bold text-3xl" > 
            <h2>Dashboard</h2>
            <h2>Posts: {dashboardData.posts}</h2>    
            <h2>Liks: {dashboardData.liks}</h2>    
            <h2>Followers: {dashboardData.followrs}</h2>    
            <h2>Following: {dashboardData.following}</h2>   
            <p>
                First Name : {dashboardData.users[0].name1} <br />
                Second Name : {dashboardData.users[0].name2} <br />
                Third Name : {dashboardData.users[0].name3}
            </p>
        </div>
    )
}

export default Dashboard;