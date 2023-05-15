import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full bg-blue-300">
      <div className="container flex justify-between items-center p-4">
        <Link to={"/dashboard"} className="text-xl font-bold text-black">
          Dashboard
        </Link>
        {/* <div className="bg-red-600 text-white text-xs rounded-md p-2">
          <button >Logout</button>
        </div> */}
      </div>
    </div>
  );
}
