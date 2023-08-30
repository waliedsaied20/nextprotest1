

function Formdata( { user } ) {
    return (
        <>
        <div className="  ">
            <h2 className="text-center font-bold text-blue-400 bg-yellow-400">This is Box {user.id}</h2>
            <div>ID: {user.id}</div>
            <div>Name: {user.name}</div>
            <div>Email :{user.email}</div>
            <div>Website :{user.website}</div>
        </div>
        </>
    )
}

export default Formdata; 