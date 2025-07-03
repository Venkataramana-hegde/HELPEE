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
  toggleTask: (taskToToggle: Task) => void;
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

      toggleTask: (taskToToggle) => {
        set((state) => {
          // Check if the task is in the completed list
          const isCompleted = state.completed.some(task => task.name === taskToToggle.name);
          
          if (isCompleted) {
            // Move from completed back to tasks
            return {
              tasks: [...state.tasks, taskToToggle],
              completed: state.completed.filter(task => task.name !== taskToToggle.name)
            };
          } else {
            // Move from tasks to completed
            return {
              tasks: state.tasks.filter(task => task.name !== taskToToggle.name),
              completed: [...state.completed, taskToToggle]
            };
          }
        });
      }
    }),
    {
      name: 'todo-storage',
    }
  )
);