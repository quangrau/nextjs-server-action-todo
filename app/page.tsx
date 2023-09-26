import { kv } from "@vercel/kv";

import type { Todo } from "@/typings/todo";
import TodoComponent from "@/components/todo-component";

export default async function Home() {
  // Get data from DB
  const res = (await kv.hgetall<Record<string, Todo>>("todo")) || {};
  const todos = Object.entries<Todo>(res)
    .map(([_, todo]) => todo)
    .sort((a, b) => a.id - b.id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-md w-full items-center font-mono text-sm">
        <h1 className="w-full text-center text-3xl font-bold tracking-wide">
          TODO
        </h1>

        <TodoComponent todos={todos} />
      </div>
    </main>
  );
}
