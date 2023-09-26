"use client";

import { TodoListItem } from "./todo-list-item";
import type { Todo } from "@/typings/todo";

type Props = {
  todos: Todo[];
};

export default function TodoList({ todos }: Props) {
  return (
    <div className="my-8 grid space-y-4 text-center w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
