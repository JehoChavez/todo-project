"use client";

import { ChangeEvent } from "react";

const Filters = ({
  todos,
  filterFunction,
}: {
  todos: Todo[] | undefined;
  filterFunction: (filteredTodos: Todo[]) => void;
}) => {
  if (todos === undefined) {
    return;
  }

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const filteredTodos = todos.filter((todo) =>
      todo.title.toLowerCase().includes(e.target.value.toLowerCase())
    );

    filterFunction(filteredTodos.reverse());
  };

  return <input type="text" onChange={inputChangeHandler} />;
};

export default Filters;
