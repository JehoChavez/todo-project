"use client";

import { useState, ChangeEvent, FormEvent } from "react";

const EditForm = ({
  todo,
  onSubmit,
}: {
  todo: Todo;
  onSubmit: (toUpdateTodo: Todo, updatedTitle: string) => void;
}) => {
  const [todoTitle, setTodoTitle] = useState<string>(todo.title);

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };

  const formSubmissionHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(todo, todoTitle);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <input type="text" value={todoTitle} onChange={inputChangeHandler} />
      <button>Save</button>
    </form>
  );
};

export default EditForm;
