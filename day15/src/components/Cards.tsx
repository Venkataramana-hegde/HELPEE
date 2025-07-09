import { IoReloadSharp } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { GrAchievement } from "react-icons/gr";
import { IoMdAlarm } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";


import profile from "../assets/profile.png";

const Cards = () => {
  return (
    <div className="mx-10 mt-3 flex gap-4">
      <div>
        <div className="border-none bg-white h-80 w-76 rounded-xl shadow-xl">
          <div className="flex items-center justify-between mx-4 pt-4">
            <p className="font-bold">Profile</p>
            <IoReloadSharp size={18}  />
          </div>
          <div className="flex flex-col items-center justify-center pt-[40px]">
            <img src={profile} className="w-[70px] h-[70px]" alt="" />
            <p>Bro</p>
            <p className="text-gray-400">Bro code</p>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            <div className="flex justify-center items-center border-none w-[50px] shadow-xl rounded-xl py-2">
              <IoPeopleSharp color="red" />
              <span className="text-xs">11</span>
            </div>
            <div className="flex justify-center items-center border-none w-[50px] shadow-xl rounded-xl">
              <MdVerified color="red" />
              <span className="text-xs">56</span>
            </div>
            <div className="flex justify-center items-center border-none w-[50px] shadow-xl rounded-xl ">
              <GrAchievement color="red" />
              <span className="text-xs">12</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 ">
          {/* Right first box */}
          <div className="border-none h-52 w-76 p-4 flex flex-col justify-between rounded-xl bg-gradient-to-tr from-pink-300 via-pink-100 to-pink-300 text-black shadow-lg">


            <div className="flex flex-row justify-between items-center">
              <p className="font-bold">
                Prioritized <br />
                tasks
              </p>
              <IoMdAlarm size={20} />
            </div>
            <div>
              <p className="text-4xl">83%</p>
              <p className="text-gray-600 text-sm">Avg. Completed</p>
            </div>
          </div>
          <div>
            <div className="border-none h-52 w-76 p-4 flex flex-col justify-between rounded-xl bg-gradient-to-tr from-blue-300 via-blue-100 to-blue-300 text-black shadow-lg">


              <div className="flex flex-row justify-between items-center">
                <p className="font-bold">
                  Additional <br />
                  tasks
                </p>
                <FaRegCircleCheck size={20} />
              </div>
              <div>
                <p className="text-4xl">56%</p>
                <p className="text-gray-600 text-sm">Avg. Completed</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="border-none bg-white h-24 w-100% rounded-xl"
          style={{ backgroundColor: "#E1E3E7" }}
        >
          <div className="flex justify-between items-center p-4">
            <div>
                <p className="text-xl">Trackers connected</p>
            <p className="text-gray-500 text-sm pt-1">3 active connections</p>
            </div>
    
            <div className="flex items-center gap-2">
                <div className="mt-3 flex -space-x-2 overflow-hidden items-center">
              <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <BsThreeDots />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
