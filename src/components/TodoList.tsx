import React from "react";
import { Todo } from "../models/todo";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList: React.FC<{
  items: Todo[];
  onDeleteTodo: (id: string) => void;
}> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem
          id={item.id}
          text={item.text}
          onDeleteTodo={props.onDeleteTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
