import React from "react";

function TodosList({ todos, setTodos, setEditTodo }) {
  const ListElements = todos.map((todo) => {
    return (
      <li className="list-item" key={todo.id}>
        <input
          type="text"
          readOnly
          value={todo.title}
          className={`list ${todo.completed ? "complete" : ""}`}
          onChange={(event) => event.preventDefault()}
        />
        <div>
          <button
            className="button-complete"
            onClick={() => completeTodo(todo.id)}
          >
            <i className="fa fa-check-circle"></i>
          </button>
          <button
            className={`button-edit ${todo.completed ? "hidden" : ""}`}
            onClick={() => editTodo(todo.id)}
          >
            <i className="fa fa-edit"></i>
          </button>
          <button
            className={`button-delete ${todo.completed ? "hidden" : ""}`}
            onClick={() => deleteTodo(todo.id)}
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </li>
    );
  });
  //*Completed Todos
  const completeTodo = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) return { ...item, completed: !item.completed };
        return item;
      })
    );
  };
  //*Edit Todos
  const editTodo = (id) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  //*Delete Todos
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return <div>{ListElements}</div>;
}

export default TodosList;
