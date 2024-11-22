"use client";
import { useState } from "react";
import { text } from "stream/consumers";

function Task() {
  const [taskInput, setTaskInput] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="input">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a task"
        />
      </div>
      <div className="button">
        <button onClick={handleAddTask}> Add Task</button>
      </div>

      {tasks.length > 0 ? (
        <ul className="list">
          {tasks.map((task, index) => (
            <li  key={index}>
              {task}
              <button onClick={() => handleDeleteTask(index)} className="remove">Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p  className="foot">No tasks yet. Add a task!</p>
      )}
    </>
  );
}
export default Task;
