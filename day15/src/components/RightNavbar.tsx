import { CiCalendar } from "react-icons/ci";

const RightNavbar = () => {
  return (
    <div className="flex justify-between items-center mt-13 mx-4">
        <p className="text-xl font-bolder">My meetings</p>
        <CiCalendar size={30}/>

    </div>
  )
}

export default RightNavbar