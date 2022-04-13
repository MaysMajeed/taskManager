import Task from "./Task";
function AllTasks(props) {
  return (
    <div>
      {props.items.map((t) => (
        <Task
          key={t.id}
          title={t.title + " #" + t.id}
          description={t.description}
          onDelete={t.onDelete}
        />
      ))}
    </div>
  );
}

export default AllTasks;
