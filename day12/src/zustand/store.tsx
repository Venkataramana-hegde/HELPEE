import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Task {
  name: string;
  priority: "high" | "medium" | "low";
}

interface TodoState {
  tasks: Task[];
  completed: Task[];
  addTask: (task: string, priority: "high" | "medium" | "low") => void;
  deleteTask: (taskToDelete: Task) => void;
  removeTask: (taskToRemove: Task) => void;
  completeTask: (taskCompleted: Task) => void;
}



export const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      tasks: [],
      completed: [],
      
      addTask: (task, priority) => {
        if (task.trim() !== "") {
          set((state) => ({
            tasks: [...state.tasks, { name: task, priority }]
          }));
        }
      },

      deleteTask: (taskToDelete) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.name !== taskToDelete.name)
        }));
      },

      removeTask: (taskToRemove) => {
        set((state) => ({
          completed: state.completed.filter((task) => task.name !== taskToRemove.name)
        }));
      },

      completeTask: (taskCompleted) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.name !== taskCompleted.name),
          completed: [...state.completed, taskCompleted]
        }));
      },
    }),
    {
      name: 'todo-storage',
    }
  )
);
