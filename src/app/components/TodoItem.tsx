"use client";

import {
  useState,
  experimental_useOptimistic as useOptimistic,
  ChangeEvent,
} from "react";

import updateTodo from "@/lib/updateTodo";
import deleteTodo from "@/lib/deleteTodo";

import Checkbox from "./Checkbox";

const TodoItem = ({ todo }: { todo: Todo }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [optimisticTodo, addOptimisticTodo] = useOptimistic(
    { todo, sending: false },
    (state, newTodoTitle) => ({
      ...state,
      title: newTodoTitle,
      sending: true,
    })
  );

  const [title, setTitle] = useState<string>(optimisticTodo.todo.title);

  const enableEditingHandler = () => {
    setIsEditing(true);
  };

  const formAction = async () => {
    addOptimisticTodo(title);

    await updateTodo(todo, title);

    setIsEditing(false);
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const cancelHandler = () => {
    setIsEditing(false);
  };

  const deleteHandler = () => {
    deleteTodo(todo.id);

    setIsEditing(false);
  }

  let content = (
    <>
      <h3 onClick={enableEditingHandler}>
        {optimisticTodo.sending ? "Updating..." : optimisticTodo.todo.title}
      </h3>
      <Checkbox todo={todo} />
    </>
  );

  if (isEditing) {
    content = (
      <form action={formAction}>
        <input type="text" value={title} onChange={inputChangeHandler} />
        <div>
          <button type="submit">Save</button>
          <button onClick={cancelHandler}>Cancel</button>
        </div>
        <div>
          <button onClick={deleteHandler}>Delete Todo</button>
        </div>
      </form>
    );
  }

  return <li key={todo.id}>{content}</li>;
};

export default TodoItem;
