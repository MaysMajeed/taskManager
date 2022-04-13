import { useState } from "react";

function AddTask({ onAdd }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDueDate, setDueDate] = useState("");
  const [taskDescription, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd({ taskTitle, taskDueDate, taskDescription });
    setTaskTitle("");
    setDueDate("");
    setDescription("");
  };
  return (
    <form className="task--form" onSubmit={onSubmit}>
      <div className="input--fields">
        <div className="input--controller">
          <label htmlFor="title">Task Title</label>
          <input
            type="text"
            placeholder="Add title"
            value={taskTitle}
            onChange={(e) => {
              setTaskTitle(e.target.value);
            }}
            id="title"
          />
        </div>

        <div className="input--controller">
          <label htmlFor="dueDate">Due Date</label>
          <input
            type="text"
            placeholder="Add due date"
            value={taskDueDate}
            onChange={(e) => {
              setDueDate(e.target.value);
            }}
            id="dueDate"
          />
        </div>

        <div className="input--controller">
          <label htmlFor="description">Task Description</label>
          <textarea
            type="text"
            placeholder="Add description for your task"
            value={taskDescription}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            id="description"
          />
        </div>
      </div>

      <input type="submit" value="Add" className="submitBtn" />
    </form>
  );
}

export default AddTask;
