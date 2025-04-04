import React, { useState } from "react";


function ToDoList() {
  const [tasks, setTasks] = useState([
    "Go Home",
    "Eat Dinner",
    "Watch Anime",
    "Sleep",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index > 0) {
      let updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      let updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="container">
      <div className="to-do-list">
        <h1>To-Do List</h1>

        <div>
          <input
            type="text"
            placeholder="Enter a task...."
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="add-button" onClick={addTask}>
            Add
          </button>
        </div>

        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button className="delete-button" onClick={() => deleteTask(index)}>
                ⊘
              </button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>
                ⇧
              </button>
              <button className="move-button" onClick={() => moveTaskDown(index)}>
                ⇩
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDoList;
