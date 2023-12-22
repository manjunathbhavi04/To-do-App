import { useState } from "react";
import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import "./App.css";
import Todoitem from "./components/TodoIitem";
import Welcome from "./components/Welcome";

function App() {
  let [text, setText] = useState("");
  let [date, setDate] = useState("");
  let [todoList, setTodoList] = useState([]);

  const handleText = (event) => {
    let newText = event.target.value;
    setText(newText);
  };

  const handleTodo = (event) => {
    if (event.target.textContent == "Add") {
      setText("");
      setDate("");
      let newTodo = [...todoList, { name: text, date: date }];
      setTodoList(newTodo);
    }
  };

  const handleDate = (event) => {
    let newDate = event.target.value;
    setDate(newDate);
  };

  const Delete = (todoName) => {
    const newTodoItems = todoList.filter(items => items.name != todoName);
    setTodoList(newTodoItems);
  };

  return (
    <center className="todo">
      <Appname />
      <Addtodo
        handleText={handleText}
        handleTodo={handleTodo}
        handleDate={handleDate}
        name={text}
        date={date}
      />
      {todoList.length === 0 && <Welcome items={todoList} />}
      {todoList.map((items) => (
        <Todoitem
          key={items}
          todoName={items.name}
          todoDate={items.date}
          handleDelete={Delete}
        />
      ))}
    </center>
  );
}

export default App;
