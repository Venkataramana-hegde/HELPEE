// import { useState } from "react";
// import Star from "../components/Star";

// const StarPage = () => {
//   const [value, setValue] = useState<number>(0);

//   const handleClick = (e: number) => {
//     console.log("Rated:", e);
//     setValue(e);
    
//   };

//   const ratings = [1, 2, 3, 4, 5];
//   return (
//     <div className="flex items-center gap-4">
//       {ratings.map((rate) => (
//         <Star key={rate} id={rate} handleClick={handleClick} value={value} />
//       ))}
//     </div>
//   );
// };

// export default StarPage;


import { useDispatch, useSelector } from "react-redux";
import { setRating } from "../redux/ratingSlice";
import type { RootState } from "../redux/store";
import Star from "../components/Star";

const StarPage = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.rating.value);

  const handleClick = (rating: number) => {
    console.log("Rated:", rating);
    dispatch(setRating(rating));
  };

  const ratings = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center gap-4">
      {ratings.map((rate) => (
        <Star key={rate} id={rate} handleClick={handleClick} value={value} />
      ))}
    </div>
  );
};

export default StarPage;
