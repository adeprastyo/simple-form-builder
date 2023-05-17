import { useDispatch } from "react-redux";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { clearUser } from "../redux/slices/userSlice";

export default function Navbar() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    // localStorage.removeItem("token");
    dispatch(clearUser());
    navigate("/");
  };

  return (
    <div className="w-full bg-blue-300">
      <div className="container flex justify-between items-center p-4">
        <Link to={"/dashboard"} className="text-xl font-bold text-black">
          Dashboard
        </Link>
        <Button
          onClick={handleLogout}
          variant="border border-black rounded-full text-xs py-1 h-7 tracking-wider text-justify font-normal"
        >
          Logut
        </Button>
      </div>
    </div>
  );
}
