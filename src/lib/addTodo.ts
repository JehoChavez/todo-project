"use server";

import { revalidatePath } from "next/cache";

const addTodo = async (newTodo: Todo) => {
  const res = await fetch("http://localhost:3500/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  if (!res.ok) {
    console.log("Failed to add new todo");
  }

  revalidatePath("/");
};

export default addTodo;
