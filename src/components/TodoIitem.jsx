import style from "./Todoitem.module.css";

function Todoitem({ todoName, todoDate, handleDelete }) {
  return (
    <div className="container  todo-container">
      <div className="row row-item">
        <div className={`col-6 ${style.name}`}>{todoName}</div>
        <div className={`col-4 ${style.date}`}>{todoDate}</div>
        <div className="col-2 btn-class">
          <button
            onClick={() => handleDelete(todoName)}
            type="button"
            className="btn btn-danger btn-item"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem;
