import { FaStar } from "react-icons/fa";

interface StarProps {
  handleClick: (value: number) => void;
  value: number;
  id: number;
}

const Star: React.FC<StarProps> = ({ handleClick, value, id }) => {
  return (
    <div>
      <FaStar
        size={50}
        onClick={() => handleClick(id)}
        color={id <= value ? "gold" : "lightgray"}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default Star;
