import { useState } from "react";
import Navbar from "../components/Navbar";
import Graph from "../components/Graph";
import { useTodoStore } from "../zustand/store";

import "../App.css";

import { Input, Splitter } from "antd";
import { Button } from "antd";
import { Select } from "antd";

const TodoPage = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [priority, setPriority] = useState<"high" | "medium" | "low">("high");
  const [filter, setFilter] = useState<"high" | "medium" | "low">(undefined);

  const { tasks, completed, addTask, deleteTask, removeTask, toggleTask } =
    useTodoStore();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
    console.log(newTask);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      addTask(newTask, priority);
      setNewTask("");
      setPriority("medium");
      // setFilter(priority);
    }
  };

  const Compo = () => {
    const filteredTasks = filter
      ? tasks.filter((task) => task.priority === filter)
      : tasks;

    return (
      <Splitter
        className="marginTop"
        style={{ height: 500, boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)" }}
      >
        <Splitter.Panel collapsible>
          {/* <Desc text="Left" /> */}
          <h1 className="text-pink-800 text-center m-4">Pending tasks</h1>

          <ol>
            {filteredTasks.map((task, index) => (
              <li
                key={index}
                className="flex justify-between border border-gray-200 p-2 m-2 rounded-md"
              >
                <span>
                  {task.name} -{" "}
                  <span className="capitalize">{task.priority}</span>
                </span>
                <div>
                  <Button danger onClick={() => deleteTask(task)}>
                    Delete
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => toggleTask(task)}
                    style={{ marginLeft: 8 }}
                  >
                    Complete
                  </Button>
                </div>
              </li>
            ))}
          </ol>
        </Splitter.Panel>
        <Splitter.Panel>
          <Splitter layout="vertical">
            <Splitter.Panel>
              <Graph />
            </Splitter.Panel>
            <Splitter.Panel>
              {/* <Desc text="Bottom" /> */}
              <h1 className="text-pink-800 text-center m-4">Completed tasks</h1>
              <ol>
                {completed.map((task, index) => (
                  <li
                    className="flex justify-between border border-gray-200 mx-8 rounded-md p-2"
                    key={index}
                  >
                    <span className="text">{task.name}</span>
                    <div>
                      <Button
                        color="cyan"
                        variant="solid"
                        onClick={() => removeTask(task)}
                      >
                        Remove
                      </Button>
                    </div>
                  </li>
                ))}
              </ol>
            </Splitter.Panel>
          </Splitter>
        </Splitter.Panel>
      </Splitter>
    );
  };

  return (
    <div>
      <Navbar />
      

      <p className="text-4xl text-center mb-4">Welcome back venkat</p>
      <div className="flex items-center justify-center">
        <div className="w-1/2 p-2 rounded-sm">
          <Input
            type="text"
            id="addTodo"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}
          />
        </div>

        <Select
          defaultValue="high"
          style={{ width: 100 }}
          onChange={(value) => setPriority(value as "high" | "medium" | "low")}
          options={[
            { value: "high", label: "High" },
            { value: "medium", label: "Medium" },
            { value: "low", label: "Low" },
          ]}
        />

        <Button className="addTaskBtn" onClick={handleAddTask}>
          Add Todo
        </Button>
      </div>
      <div className="flex justify-center gap-4 my-4">
        <Button
          type={filter === undefined ? "primary" : "default"}
          onClick={() => setFilter(undefined)}
        >
          All
        </Button>
        <Button
          type={filter === "high" ? "primary" : "default"}
          onClick={() => setFilter("high")}
        >
          High
        </Button>
        <Button
          type={filter === "medium" ? "primary" : "default"}
          onClick={() => setFilter("medium")}
        >
          Medium
        </Button>
        <Button
          type={filter === "low" ? "primary" : "default"}
          onClick={() => setFilter("low")}
        >
          Low
        </Button>
      </div>
      <Compo />
      
    </div>
  );
};

export default TodoPage;
