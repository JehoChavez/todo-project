import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <main className="bg-violet-50 h-screen w-screen">
      <h1 className="text-5xl text-violet-900">Hello</h1>
      {/* @ts-expect-error Server Component */}
      <TodoList />
    </main>
  );
}
