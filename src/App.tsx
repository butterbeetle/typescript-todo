import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const TodoAddHandler = (text: string) => {
    console.log(text);
    setTodoList((prevTodoList) => [
      ...prevTodoList,
      { id: Math.random().toString(), text: text },
    ]);
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={TodoAddHandler} />
      <TodoList items={todoList} />
    </div>
  );
};

export default App;
