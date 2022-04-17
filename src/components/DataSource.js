import AllTasks from "./AllTasks";
const Tasks = [
  {
    id: "1",
    title: "Learn HTML",
    dueDate: "today",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, consectetur?",
  },
  {
    id: "2",
    title: "Learn CSS",
    dueDate: "yesterday",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, consectetur?",
  },
  {
    id: "3",
    title: "Learn JavaScript",
    dueDate: "today",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, consectetur?",
  },
  {
    id: "4",
    title: "Learn React",
    dueDate: "next month",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, consectetur?",
  },
  {
    id: "5",
    title: "Learn Node JS",
    dueDate: "next year",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, consectetur?",
  },
];

function Tasky() {
  return (
    <div>
      <AllTasks items={Tasks} />
    </div>
  );
}

export default Tasky;
