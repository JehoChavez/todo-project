import fetchTodos from "@/lib/fetchTodos";

export default async function TodoList() {
  const todos = await fetchTodos();

  let content;

  if (!todos) {
    content = <p>No todos available</p>;
  } else {
    const sortedTodos = todos.reverse();

    content = (
      <>
        {sortedTodos.map((todo) => (
          <p className="text-black">{todo.title}</p>
        ))}
      </>
    );
  }

  return content;
}
