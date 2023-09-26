import TodoForm from "@/components/todo-form";
import TodoList from "@/components/todo-list";

export default function Home() {
  const todos = [
    {
      id: 1,
      content: "Fix bug",
    },
    {
      id: 2,
      content: "Learn NextJS",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-md w-full items-center font-mono text-sm">
        <h1 className="w-full text-center text-3xl font-bold tracking-wide">
          TODO
        </h1>
        <TodoForm />
        <TodoList todos={todos} />
      </div>
    </main>
  );
}
