// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchTodos } from "../../features/todoSlice";

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// const Display = () => {
//   // const [users, setUsers] = useState<User[]>([]);
//   // useEffect(() => {
//   //  axios
//   //     .get<User[]>("https://jsonplaceholder.typicode.com/users")
//   //     .then((res) => setUsers(res.data))
//   //     .catch((err) => console.error(err));
//   // }, []);

//   const dispatch = useDispatch();

//   return (
//     <div className="flex flex-col justify-center items-center">
//       <button className="h-[40px] w-[90px] cursor-pointer bg-black text-white rounded-sm">fetch todos</button>
//       {/* {users.map((user: User) => (
//         <p
//           className="w-5/6 text-center p-3 border border-black m-3 rounded-md"
//           key={user.id}
//         >
//           {user.name} <br /> {user.email}
//         </p>
//       ))} */}
//     </div>
//   );
// };

// export default Display;


import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../features/todoSlice";
import { type RootState,type AppDispatch } from "../../app/store";

const Display = () => {
  const dispatch = useDispatch<AppDispatch>();

  const todos = useSelector((state: RootState) => state.todos.data);
  const loading = useSelector((state: RootState) => state.todos.isLoading);
  const error = useSelector((state: RootState) => state.todos.isError);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Todo List</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong!</p>}
      {todos.map((todo) => (
        <div key={todo.id} className="border p-2 m-2 rounded">
          <p>{todo.title}</p>
          <p>Status: {todo.completed ? "Done" : " Not done"}</p>
        </div>
      ))}
    </div>
  );
};

export default Display;

