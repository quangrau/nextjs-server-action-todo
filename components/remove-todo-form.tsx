"use client";

import { removeTodo } from "@/actions/todo-actions";
import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

type Props = {
  id: number;
};

export default function RemoveTodoForm({ id }: Props) {
  const { pending } = useFormStatus();

  return (
    <form
      name="remove-todo"
      action={removeTodo}
      className="h-full flex justify-center items-center"
    >
      <input type="hidden" name="id" value={id} />
      <button type="submit" aria-disabled={pending} className="w-full h-full">
        🔥
      </button>
    </form>
  );
}
