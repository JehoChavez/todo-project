import fetchTodos from "@/lib/fetchTodos";

import TodoItem from "./TodoItem";

export default async function TodoList() {
  const todos = await fetchTodos();

  let content;

  if (!todos) {
    content = <p>No todos available</p>;
    console.log("what");
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
