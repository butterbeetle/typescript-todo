import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import "./NewTodo.css";

const NewTodo: React.FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enterdText = textInputRef.current!.value;
    todosCtx.addTodo(enterdText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
