"use server";

import { revalidatePath } from "next/cache";

const deleteTodo = async (todoId: number) => {
  const res = await fetch(`http://localhost:3500/todos/${todoId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  });

  if (!res.ok) {
    console.log("Failed to delete todo");
  }

  revalidatePath("/");
};

export default deleteTodo;