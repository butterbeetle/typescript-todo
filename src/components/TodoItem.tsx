import React from "react";

const TodoItem: React.FC<{
  id: string;
  text: string;
  onDeleteTodo: () => void;
}> = (props) => {
  return (
    <li key={props.id}>
      <span>{props.text}</span>
      <button onClick={props.onDeleteTodo}>DELETE</button>
    </li>
  );
};
export default TodoItem;
