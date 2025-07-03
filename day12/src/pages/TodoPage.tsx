import { useState } from "react";
import Navbar from "../components/Navbar";
import Graph from "../components/Graph";
import { useTodoStore } from "../zustand/store";

import { Input } from "antd";
// import { Button } from "antd";

const TodoPage = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [priority, setPriority] = useState<"high" | "medium" | "low">("medium");

  const { tasks, completed, addTask, deleteTask, removeTask, completeTask } =
    useTodoStore();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
    console.log(newTask);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      addTask(newTask, priority);
      setNewTask("");
      setPriority("medium"); // reset if needed
    }
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl text-center">Welcome back Venkat</h1>
      <div className="m-5">
        <div className="flex items-center justify-center">
          {/* <input
            className="w-1/2 p-2 border border-gray-200 rounded-sm"
            type="text"
            id="addTodo"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}
          /> */}
          <div className="w-1/2 p-2 rounded-sm">
          <Input 
            type="text"
            id="addTodo"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}/>
            </div>
          {/* <label htmlFor="cars">Priority:</label> */}

          <select
            className="text-white bg-orange-600 hover:bg-orange-800 p-2 ml-[5px] rounded-sm"
            name="Priority"
            id="Priority"
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value as "high" | "medium" | "low")
            }
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>

          <button
            className="text-white bg-pink-600 hover:bg-pink-800 p-2 ml-[5px] rounded-sm"
            onClick={handleAddTask}
          >
            Add Todo
          </button>
        </div>
        <div className="flex border rounded-2xl border-gray-200 m-10 p-10">
          <div className="border border-gray-200 m-2 p-10 w-full shadow-sm">
            <h1 className="text-pink-800 text-center">Pending tasks</h1>
            <ol>
              {tasks.map((task, index) => (
                <li
                  className="flex justify-between border mb-4 border-gray-200 rounded-md p-2"
                  key={index}
                >
                  <span className="text">
                    {task.name} -{" "}
                    <span
                      className="text-yellow-900"
                    >
                      {task.priority}
                    </span>
                  </span>
                  <div>
                    <button
                      className="bg-red-400 hover:bg-red-600 p-1 mr-[4px] w-21 rounded-sm text-white"
                      onClick={() => deleteTask(task)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-blue-400 hover:bg-blue-600 py-1 px-2 w-23 rounded-sm text-white"
                      onClick={() => completeTask(task)}
                    >
                      Completed
                    </button>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="border border-gray-200 rounded-md m-2  w-full h-screen shadow-sm">
            <Graph />
            <div className="border border-gray-200 m-10 pb-4 h-85 shadow-sm rounded-md">
              <h1 className="text-pink-800 text-center">Completed tasks</h1>
              <ol>
                {completed.map((task, index) => (
                  <li
                    className="flex justify-between border border-gray-200 m-3 rounded-md p-2"
                    key={index}
                  >
                    <span className="text">{task.name}</span>
                    <div>
                      <button
                        className="bg-green-400 hover:bg-green-600 mr-[4px] w-21 rounded-md text-white"
                        onClick={() => removeTask(task)}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
