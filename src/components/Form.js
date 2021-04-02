import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
function Form({ input, setInput, todos, setTodos, editTodo, setEditTodo }) {
  //*submit
  const submitForm = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([{ id: uuidv4(), title: input, completed: false }, ...todos]);
      setInput("");
    } else {
      updateTodo(editTodo.id, input, editTodo.completed);
    }
  };

  //*Update Todo
  const updateTodo = (id, title, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { id, title, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    editTodo ? setInput(editTodo.title) : setInput("");
  }, [setInput, editTodo]);

  //*render
  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        placeholder="New Todo..."
        className="task-input"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        required
      />
      <button className="button-add" type="submit">
        {editTodo ? "OK" : "Add"}
      </button>
    </form>
  );
}

export default Form;
