import Link from "next/link";


function NavbarRender() {
    return (
        <div className="bg-orange-400 text-white">
            <div className="container mx-auto px-6">

                <ul className="flex justify-around items-center ">
                    <li className="font-bold text-xl p-2 hover:bg-gray-500 my-2 rounded-xl">
                        <Link href='/'>
                            Home
                        </Link>
                    </li>
                    <li className="font-bold text-xl p-2 hover:bg-gray-500 my-2 rounded-xl">
                        <Link href='/posts'>
                            Posts
                        </Link>
                    </li>
                    <li className="font-bold text-xl p-2 hover:bg-gray-500 my-2 rounded-xl">
                        <Link href='/users'>
                            Users Page
                        </Link>
                    </li>
                    <li className="font-bold text-xl p-2 hover:bg-gray-500 my-2 rounded-xl">
                        <Link href='/'>
                            Sign Up
                        </Link>
                    </li>
                    <li className="font-bold text-xl p-2 hover:bg-gray-500 my-2 rounded-xl">
                        <Link href='/'>
                            Login
                        </Link>
                    </li>
                    <li className="font-bold text-xl p-2 hover:bg-gray-500 my-2 rounded-xl">
                        <Link href='/dashboard'>
                           Dashboard
                        </Link>
                    </li>
                    <li className="font-bold text-xl p-2 hover:bg-gray-500 my-2 rounded-xl">
                        <Link href='/dashboard-swr'>
                           Dashboard-SWR
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavbarRender;