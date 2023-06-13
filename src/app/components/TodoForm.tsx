"use client";

import { FormEvent, useState, ChangeEvent } from "react";
import addTodo from "@/lib/addTodo";

const TodoForm = () => {
  const [title, setTitle] = useState<string>("");
  const [prioritize, setPrioritize] = useState<boolean>(false);

  const titleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const prioritizeChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPrioritize(e.target.checked);
  };

  const submitTodoHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addTodo({
      title,
      prioritize,
      completed: false,
    });

    setTitle("");
    setPrioritize(false);
  };

  return (
    <form onSubmit={submitTodoHandler}>
      <div>
        <label htmlFor="todo">Todo:</label>
        <input
          type="text"
          id="todo"
          value={title}
          onChange={titleChangeHandler}
          placeholder="Type the new todo"
        />
      </div>
      <div>
        <label htmlFor="prioritize">Prioritize</label>
        <input
          type="checkbox"
          name="prioritize"
          id="prioritize"
          checked={prioritize}
          onChange={prioritizeChangeHandler}
        />
      </div>
      <button>Save</button>
    </form>
  );
};

export default TodoForm;
