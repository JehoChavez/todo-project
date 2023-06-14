"use server";

import { revalidatePath } from "next/cache";

const markTodo = async (todo: Todo) => {
  const res = await fetch(`http://localhost:3500/todos/${todo.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      completed: !todo.completed,
    }),
  });

  if (!res.ok) {
    console.log("Failed to add new todo");
  }

  revalidatePath("/");
};

export default markTodo;
