import Logout from "./Logout";
import "../../../styles/global.css";

const { getServerSession } = require("next-auth");
const { signOut } = require("next-auth/react");
const { default: Link } = require("next/link");

const Header = async () => {
  const session = await getServerSession();
  // console.log(session);
  return (
    <header className="flex align-bottomline justify-between p-4 bg-gray-800 text-white font-bold">
      <Link className="font-bold text-2xl font-sans hover:cursor-pointer" href={'/'}>Caffiene Blog</Link>
      {session ? (
        <Logout />
      ) : (
        <Link className="border-2 rounded px-2 py-1" href="/authentication">
          Login
        </Link>
      )}
    </header>
  );
};

export default Header;
