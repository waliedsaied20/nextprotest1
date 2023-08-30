
import Link from "next/link";
import Formdata from "../component/fromdata";

function Users({ usersList }) {
    console.log(usersList)


    return (
        <div>

            <Link href='/'> Home page</Link>
            This is Page Users

            {usersList.map((user) => {
                return (
                    <div key={user.id} className="container mx-auto px-4  border-red-400 border-dashed m-4 border-2">
                        <Formdata user={user} />

                    </div> 
                    // Or
                    // <div key={user.id} className="border text-center">
                    //     <div> Name : {user.name} </div>
                    //     <div> ID: {user.id} </div>
                    //     <div> Email :{user.email} </div>
                    //     <div> Phone: {user.phone} </div>
                    //     <div> Website :{user.website} </div>
                    // </div>
                )
            })}

        </div>
    )
}

export default Users;

// https://jsonplaceholder.typicode.com/users
export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()

    console.log(data)

    return {
        props: {
            usersList: data
        }
    }
}