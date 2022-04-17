import { useState } from "react";
import Task from "./Task";
function AllTasks({ items }) {
  let [itemList, setItemList] = useState(items);
  const handleDelete = (itemId) => {
    setItemList(itemList.filter((x) => x.id !== itemId));
  };
  return (
    <div>
      {itemList.map((t) => (
        <Task
          key={t.id}
          title={t.title + " #" + t.id}
          description={t.description}
          onDelete={() => handleDelete(t.id)}
        />
      ))}
    </div>
  );
}

export default AllTasks;
