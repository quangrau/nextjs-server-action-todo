import React from "react";
import type { Todo } from "@/typings/todo";
import RemoveTodoForm from "./remove-todo-form";
import ToggleTodoForm from "./toggle-todo-form";

type Props = {
  todo: Todo;
};

export function TodoListItem({ todo }: Props) {
  return (
    <div className="rounded shadow border border-gray-300 bg-slate-50 flex hover:bg-stone-100 group">
      <span className="w-12 shrink-0">
        <ToggleTodoForm id={todo.id} completed={todo.completed} />
      </span>
      <span className="px-4 py-2 flex-1">{todo.content}</span>
      <span className="w-12 shrink-0 group-hover:block">
        <RemoveTodoForm id={todo.id} />
      </span>
    </div>
  );
}
