import Logout from "./Logout";

const { getServerSession } = require("next-auth");
const { signOut } = require("next-auth/react");
const { default: Link } = require("next/link");

const Header = async () => {

    const session = await getServerSession();
    console.log(session);
    return (
        <header className="flex justify-between p-4 bg-gray-800 text-white font-bold">
            <h1>Caffiene Blog</h1>
            {session ? <Logout /> : <Link href='/authentication'>Login</Link>}
            
        </header>
    )
};

export default Header;
