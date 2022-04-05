import { createContext, useContext, useState } from "react";
import {v4 as uuid} from 'uuid'

export const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: "1", title: "first task", description: "first description" },
  ]);
  //Create
  const createTask = (title, description) => 
    setTasks([...tasks, {title, description, id: uuid()}])
  
  // Update
  const updateTask = (id, updatedTask) => 
    setTasks([...tasks.map(task => task.id === id ? {...task, ...updatedTask} : task)])
  //Delete
    const deleteTask = id => setTasks([...tasks.filter(task=> task.id !== id)])

  return (
    <TaskContext.Provider value={{ tasks, createTask, updateTask, deleteTask }}>{children}</TaskContext.Provider>
  );
};
