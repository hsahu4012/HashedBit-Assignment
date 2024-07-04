import React, { useState, useEffect } from "react";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const getTodoListFromLocal = () => {
    return JSON.parse(localStorage.getItem("TodoList")) || [];
  };

  // Load tasks from local storage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
    console.log("Loaded tasks from local storage:", storedTasks);
  }, []);

  // Save tasks to local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("Saved tasks to local storage:", tasks);
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const updatedTasks = [...tasks, newTask].sort();
      setTasks(updatedTasks);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className={styles.container}>
      <h1>Todo List</h1>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          className={styles.input}
        />
        <button onClick={handleAddTask} className={styles.button}>
          Add
        </button>
      </div>
      <ul className={styles.list}>
        {tasks.map((task, index) => (
          <li key={index} className={styles.listItem}>
            {task}
            <button
              onClick={() => handleDeleteTask(index)}
              className={styles.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
