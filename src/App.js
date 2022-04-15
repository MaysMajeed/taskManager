import Tasky from "./components/DataSource";
import AddTask from "./components/AddTask";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);

  const newTaskHandler = () => {
    setShowForm(!showForm);
  };
  const AddNewTask = (task, props) => {
    const newTaskObject = {
      id: Math.floor(Math.random() * 10000),
      title: task.taskTitle,
      taskDaueDate: task.taskDueDate,
      description: task.taskDescription,
    };

    console.log(newTaskObject);
    //props.items.push({ newTaskObject });
  };
  const deletHandler = () => {
    console.log("Item deleted!");
  };

  return (
    <div>
      <h1 className="big--title">
        MY TASKS <FaPlus className="icon--plus" onClick={newTaskHandler} />
      </h1>
      {showForm && <AddTask onAdd={AddNewTask} />}

      <Tasky onDelete={deletHandler} />
    </div>
  );
}

export default App;
