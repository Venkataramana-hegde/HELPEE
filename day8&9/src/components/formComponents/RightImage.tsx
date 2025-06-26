import Dashboard from "../../assets/Dashboard.png";

const RightImage = () => {
  return (
    <div >
      <div className="text-white ml-28 mt-20 mb-8">
        <p className="text-3xl mb-4">
          Effortlessly manage your team <br /> and operations.
        </p>
        <p className="text-[14px]">
          Login to access your CRM dashboard and manage your team.
        </p>
      </div>
      <img className="w-md m-auto" src={Dashboard} alt="" />
    </div>
  );
};

export default RightImage;
