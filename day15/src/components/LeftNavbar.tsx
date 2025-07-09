import { CgProfile } from "react-icons/cg";
import logo from "../assets/logo.png";

const LeftNavbar = () => {
  return (
    <div className="flex justify-between mt-4 mx-5">
      <div className="flex justify-center items-center">
        <img src={logo} alt="logo" className="w-[100px]" />
        <div className="">
          <p className="font-bold text-xl">Welcome, Venkat</p>
          <p className="text-gray-400">Your personal dashboard overview</p>
        </div>
      </div>
      <div className="flex items-center gap-2 mr-5">
        <input type="text" placeholder="Search" className="border-none bg-gray-200 px-3 h-[40px] rounded-xl"/>
      <CgProfile size={30} />
      </div>
    </div>
  );
};

export default LeftNavbar;
