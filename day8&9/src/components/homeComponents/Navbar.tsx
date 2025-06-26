import { useNavigate } from "react-router-dom"
import {toast} from "react-hot-toast"
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(logout())
        
        setTimeout(() => {
            return navigate("/");
      }, 1000);
    toast.success("Successful logout")
    }

  return (
    <div className="flex justify-center gap-7 m-[5px] pb-2 border-b-2">
        <button>Home</button>
        <button>About Us</button>
        <button>Features</button>
        <button>Contact</button>
        <button onClick={handleClick} className="h-[40px] w-[90px] cursor-pointer bg-black text-white rounded-sm">Logout</button>
    </div>
  )
}

export default Navbar