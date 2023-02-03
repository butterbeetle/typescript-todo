const TodoItem: React.FC<{ id: string; text: string }> = (props) => {
  return (
    <li key={props.id}>
      <span>{props.text}</span>
      {/* <button onClick={props.onDeleteTodo.bind(null, todo.id)}>DELETE</button> */}
    </li>
  );
};
export default TodoItem;
