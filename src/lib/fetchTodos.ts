const fetchTodos = async () => {
  try {
    const res = await fetch("http://localhost:3500/todos");

    const todos: Todo[] = await res.json();

    return todos;
  } catch (err) {
    if (err instanceof Error) console.log(err.stack);
  }
};

export default fetchTodos;
