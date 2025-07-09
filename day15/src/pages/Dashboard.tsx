import Cards from "../components/Cards"
import Demo from "../components/Demo"
import DevelopedAreas from "../components/DevelopedAreas"
import LeftNavbar from "../components/LeftNavbar"
import Meetings from "../components/Meetings"
import RightNavbar from "../components/RightNavbar"

const Dashboard = () => {
  return (
    <div className="flex">
        <div className=" border-r-1 border-gray-300 w-3/4 h-full">
            <LeftNavbar />
            <Cards />
            <Demo />
        </div>
        <div className="w-1/4">
            <RightNavbar />
            <Meetings />
            <DevelopedAreas />
        </div>
    </div>
  )
}

export default Dashboard