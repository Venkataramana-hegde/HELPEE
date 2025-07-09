import zoom from "../assets/zoom.png";
import googleMeet from "../assets/google-meet.png";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { RiArrowDropRightLine } from "react-icons/ri";

const meetings = [
  {
    time: "08:15 am",
    date: "Tue, 11 Jul",
    title: "Quick daily meeting",
    app: "Zoom",
    src: zoom,
  },
  {
    time: "09:30 pm",
    date: "Tue, 11 Jul",
    title: "John kun Onboarding",
    app: "Google Meet",
    src: googleMeet,
  },
  {
    time: "02:30 pm",
    date: "Tue, 12 Jul",
    title: "Call With a New Team",
    app: "Google Meet",
    src: googleMeet,
  },
  {
    time: "04:00 pm",
    date: "Tue, 15 Jul",
    title: "Lead Designers Event",
    app: "Zoom",
    src: zoom,
  },
];

const Meetings = () => {
  return (
    <div className="flex flex-col gap-4 m-4 mt-7 text-sm divide-y divide-gray-300">
      {meetings.map((meet, idx) => (
        <div key={idx} className="flex justify-between items-center p-4">
          <div>
            <p className="text-gray-500">{meet.date}</p>
            <p>{meet.time}</p>
          </div>
          <div>
            <p>{meet.title}</p>
            <p className="flex items-center gap-1">
              <img className="w-[15px] h-[15px]" src={meet.src} alt="" />
              <span className="text-gray-500">{meet.app}</span>
            </p>
          </div>
          <FaArrowUpRightFromSquare />
        </div>
      ))}
      <p className="flex justify-center items-center text-gray-400 mt-4">
        See all meetings{" "}
        <span>
          <RiArrowDropRightLine size={25} />
        </span>
      </p>
      
    </div>
  );
};

export default Meetings;
