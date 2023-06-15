"use client";

import { experimental_useOptimistic as useOptimistic } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import markTodo from "@/lib/markTodo";

const Checkbox = ({ todo }: { todo: Todo }) => {
  const [optimisticTodo, addOptimisticTodo] = useOptimistic(
    todo,
    (state: Todo, completed: boolean) => ({ ...state, completed })
  );

  const { pending } = useFormStatus();

  return (
    <>
      <input
        type="checkbox"
        checked={optimisticTodo.completed}
        name="completed"
        id="completed"
        onChange={async () => {
          addOptimisticTodo(!todo.completed);
          await markTodo(todo);
        }}
        disabled={pending}
      />
    </>
  );
};

export default Checkbox;
