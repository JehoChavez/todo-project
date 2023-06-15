"use client";

import { useState, experimental_useOptimistic as useOptimistic } from "react";
import updateTodo from "@/lib/updateTodo";

import Checkbox from "./Checkbox";
import EditForm from "./EditForm";

const TodoItem = ({ todo }: { todo: Todo }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const enableEditingHandler = () => {
    setIsEditing((prevState: boolean) => !prevState);
  };

  const [optimisticTodo, addOptimisticTodo] = useOptimistic(
    todo,
    (state: Todo, title: string) => ({ ...state, title })
  );

  const formSubmissionHandler = async (
    toUpdateTodo: Todo,
    updatedTitle: string
  ) => {
    addOptimisticTodo(updatedTitle);

    await updateTodo(toUpdateTodo, updatedTitle);

    setIsEditing(false);
  };

  let content = (
    <>
      <h3 onClick={enableEditingHandler}>{optimisticTodo.title}</h3>
      <Checkbox todo={todo} />
    </>
  );

  if (isEditing) {
    content = (
      <EditForm todo={optimisticTodo} onSubmit={formSubmissionHandler} />
    );
  }

  return <li key={todo.id}>{content}</li>;
};

export default TodoItem;