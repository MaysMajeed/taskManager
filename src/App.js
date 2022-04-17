import Tasky from "./components/DataSource";
import AddTask from "./components/AddTask";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { Task } from "./components/data";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState(Task);
  const newTaskHandler = () => {
    setShowForm(!showForm);
  };
  const AddNewTask = (task) => {
    const newTaskObject = {
      id: Math.floor(Math.random() * 10000),
      title: task.taskTitle,
      taskDaueDate: task.taskDueDate,
      description: task.taskDescription,
    };
    setTasks(Task.unshift(newTaskObject))
  };
  return (
    <div>
      <h1 className="big--title">
        MY TASKS <FaPlus className="icon--plus" onClick={newTaskHandler} />
      </h1>
      {showForm && <AddTask onAdd={AddNewTask} />}

      <Tasky tasks={tasks}/>
    </div>
  );
}

export default App;
