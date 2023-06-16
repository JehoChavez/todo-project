import fetchTodos from "@/lib/fetchTodos";

import TodoItem from "./TodoItem";

export default async function TodoList() {
  const todos = await fetchTodos();

  let content;

  if (!todos || todos.length === 0) {
    content = <p>No todos available</p>;
  } else {
    const sortedTodos = todos.reverse();

    content = (
      <ul>
        {sortedTodos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    );
  }

  return content;
}
