"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen text-black flex-col">
      <div className="border-none shadow-md w-[500px]">
        <div >
          <h1 className="text-3xl font-bold text-center m-4">Enter your name</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center"
        >
          <input
            type="text"
            value={inputVal}
            placeholder="Type your name... "
            onChange={(e) => setInputVal(e.target.value)}
            className="border border-gray-400 w-[300px] mb-4"
          />
          <button type="submit" className="border-none bg-blue-500 hover:bg-blue-600 px-6 py-2 mb-4 rounded-md text-white">Predict Data</button>
        </form>
      </div>
    </div>
  );
}
