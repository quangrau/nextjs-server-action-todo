import React from "react";
import type { Todo } from "@/typings/todo";

type Props = {
  todo: Todo;
};

export function TodoListItem({ todo }: Props) {
  return (
    <div className="rounded shadow border border-gray-300 bg-slate-50 px-4 py-2">
      {todo.content}
    </div>
  );
}
