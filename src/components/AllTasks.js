import Task from "./Task";
function AllTasks(props, onDelete) {
  return (
    <div>
      {props.items.map((t) => (
        <Task
          key={t.id}
          title={t.title + " #" + t.id}
          description={t.description}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default AllTasks;
