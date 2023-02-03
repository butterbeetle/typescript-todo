import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./models/todo";

const App: React.FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    console.log(text);
    setTodoList((prevTodoList) => [
      ...prevTodoList,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.filter((todoList) => todoList.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todoList} />
    </div>
  );
};

export default App;
