import { FaTimes } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

function Task({ id, title, description, onDelete }) {
  return (
    <div className="task">
      <h2 className="task--title">
        {id}
        {title}
        <div>
          <FaTimes className="icon--close" onClick={onDelete} />
        </div>
      </h2>
      {description}
    </div>
  );
}
export default Task;
