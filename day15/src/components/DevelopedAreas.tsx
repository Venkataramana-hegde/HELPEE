{
  /* <div className="w-1/2 bg-gray-200 rounded-full h-2 overflow-hidden">
  <div className="bg-blue-600 h-full" style={{ width: "65%" }}></div>
</div>; */
}

import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BsArrowUpCircleFill } from "react-icons/bs";

const developedAreas = [
  {
    interest: "Sport Skills",
    Width: "71%",
    percent: "71%",
    icon: <BsFillArrowDownCircleFill color="red" />,
  },
  {
    interest: "Blogging",
    Width: "92%",
    percent: "92%",
    icon: <BsArrowUpCircleFill color="blue" />,
  },
  {
    interest: "Leadership",
    Width: "33%",
    percent: "33%",
    icon: <BsFillArrowDownCircleFill color="red" />,
  },
  {
    interest: "Meditation",
    Width: "56%",
    percent: "56%",
    icon: <BsArrowUpCircleFill color="blue" />,
  },
  {
    interest: "Philosophy",
    Width: "79%",
    percent: "79%",
    icon: <BsArrowUpCircleFill color="blue" />,
  },
];

const DevelopedAreas = () => {
  return (
    <div className="m-4 mt-7">
      <div className="mb-5">
        <p className="text-xl">Developed Areas</p>
        <p className="text-gray-400 text-sm">Most Common Areas of Interest</p>
      </div>
       <div className="flex flex-col space-y-7">
      {developedAreas.map((interest, id) => (
        <div key={id} className="flex items-center justify-between">
          <p className="text-xs">{interest.interest}</p>
          <div className="flex items-center gap-2">
            <div className="w-40 bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-blue-600 h-full"
              style={{ width: interest.Width }}
            ></div>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-xs text-gray-500">{interest.percent}</p>
            <p>|</p>
          {interest.icon}
          </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default DevelopedAreas;
