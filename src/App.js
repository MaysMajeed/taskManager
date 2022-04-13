import Tasky from "./components/DataSource";
import AddTask from "./components/AddTask";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);

  const newTaskHandler = () => {
    setShowForm(!showForm);
  };
  const AddNewTask = ({ task }) => {
    const NewTitle = task.taskTitle;
    const NewDueDate = task.taskDueDate;
    const NewDescription = task.taskDescription;

    // const newTaskObject = {
    //   id: Math.random() * 1000,
    //   title: NewTitle,
    //   taskDaueDate: NewDueDate,
    //   description: NewDescription,
    // };

    // props.items.push({ newTaskObject });
    console.log(NewTitle,NewDueDate,NewDescription);
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
