const Navbar = () => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = Date.now();
  const today = new Date(date);
  const currentDate = today.toLocaleDateString();
  const d = new Date(currentDate);
  const day = d.getDay();
  return (
    <div className="flex items-center justify-between m-5">
      <p className="font-bold text-3xl">
        <span className="text-pink-800">Todo</span>
        <span className="text-black">App</span>
      </p>

      <div>
        <p className="text-blue-600 text-[13px]">{currentDate}</p>
        <p className="text-[13px]">{weekday[day]}</p>
      </div>
    </div>
  );
};

export default Navbar;
