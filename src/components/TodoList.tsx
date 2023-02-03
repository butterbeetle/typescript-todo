import React from "react";
import { Todo } from "../models/todo";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem id={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default TodoList;
