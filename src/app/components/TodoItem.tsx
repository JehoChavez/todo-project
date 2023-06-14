import Checkbox from "./Checkbox";

const TodoItem = ({ todo }: { todo: Todo }) => {
  console.log(todo);

  return (
    <li key={todo.id}>
      <h3>{todo.title}</h3>
      <Checkbox todo={todo} />
    </li>
  );
};

export default TodoItem;
