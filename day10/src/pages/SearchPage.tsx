import { useState } from "react";

interface Suggest {
  id: number;
  label: string;
}

const SearchPage = () => {
  const [result, setResult] = useState<Suggest[]>([]);

  const suggestions = [
    { id: 1, label: "Apple" },
    { id: 2, label: "Banana" },
    { id: 3, label: "Blueberry" },
    { id: 4, label: "Cherry" },
    { id: 5, label: "Grapes" },
    { id: 6, label: "Mango" },
    { id: 7, label: "Orange" },
    { id: 8, label: "Peach" },
    { id: 9, label: "Pineapple" },
    { id: 10, label: "Strawberry" },
    { id: 11, label: "Watermelon" },
  ];

  const handleChange = (value: string) => {
    console.log(value);

    const query = suggestions.filter((suggestion) =>
      suggestion.label.toLowerCase().startsWith(value.toLowerCase())
    );
    console.log(query);

    setResult(query);
  };

  return (
    <div className="grid place-content-center h-screen relative">
      <input
        type="text"
        onChange={(e) => handleChange(e.target.value)}
        className="border w-80 rounded-sm border-gray-600"
      />
      <div className="">
        {result.length == 0
          ? suggestions.map((sug) => <p>{sug.label}</p>)
          : result.map((res) => <p>{res.label}</p>)}
      </div>
    </div>
  );
};

export default SearchPage;
