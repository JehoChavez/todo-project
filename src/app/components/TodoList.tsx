"use client";

import fetchTodos from "@/lib/fetchTodos";

import TodoItem from "./TodoItem";

export default async function TodoList() {
  const todos = await fetchTodos();

  let content;

  if (todos === undefined) {
    content = <p>No todos available</p>;
  } else {
    content = (
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    );
  }

  return <>{content}</>;
}
