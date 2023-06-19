"use client";

import fetchTodos from "@/lib/fetchTodos";

import { useEffect, useState } from "react";

import TodoItem from "./TodoItem";
import Filters from "./Filters";

export default function TodoList() {
  let content;

  const [initialTodos, setInitalTodos] = useState<Todo[] | undefined>(
    undefined
  );
  const [displayedTodos, setDisplayedTodos] = useState<Todo[] | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchMyTodos = async () => {
      const todos = await fetchTodos();
      setInitalTodos(todos);
      setDisplayedTodos(todos);
    };

    fetchMyTodos();
  }, []);

  const filterTodos = (filteredTodos: Todo[]) => {
    setDisplayedTodos(filteredTodos);
  };

  if (!initialTodos) {
    content = <p>Loading...</p>;
  } else if (initialTodos.length === 0 || displayedTodos === undefined) {
    content = <p>No todos available</p>;
  } else {
    const sortedTodos = displayedTodos.reverse();

    content = (
      <ul>
        {sortedTodos.map((todo) => (
          <TodoItem todo={todo}  key={todo.id}/>
        ))}
      </ul>
    );
  }

  return (
    <>
      <Filters todos={initialTodos} filterFunction={filterTodos} />
      {content}
    </>
  );
}
