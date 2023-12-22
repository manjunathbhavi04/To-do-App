function Addtodo({ handleText,name, date, handleTodo, handleDate }) {
  return (
    <div className="container text-center">
      <div className="row row-item">
        <div className="col-6">
          <input value={name} onChange={handleText} type="text" placeholder="Enter todo here" />
        </div>
        <div className="col-4">
          <input value={date} onChange={handleDate} type="date" />
        </div>
        <div className="col-2">
          <button onClick={handleTodo} type="button" className="btn btn-success btn-item">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
