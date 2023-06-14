const TodoItem = ({ todo }: { todo: Todo }) => {
  console.log(todo);

  return (
    <li key={todo.id}>
      <h3>{todo.title}</h3>
      <input type="checkbox" checked={todo.completed} />
    </li>
  );
};

export default TodoItem;
