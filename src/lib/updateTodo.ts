"use server";

import { revalidatePath } from "next/cache";

const updateTodo = async (todo: Todo, updatedTitle: string) => {
  const res = await fetch(`http://localhost:3500/todos/${todo.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: updatedTitle,
    }),
  });

  if (!res.ok) {
    console.log("Failed to add new todo");
  }

  revalidatePath("/");
};

export default updateTodo;
