"use client";

import { toggleTodo } from "@/actions/todo-actions";
import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

type Props = {
  id: number;
  completed: boolean;
};

export default function ToggleTodoForm({ id, completed }: Props) {
  const { pending } = useFormStatus();

  return (
    <form name="toggle-todo" action={toggleTodo} className="h-full ">
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="completed" value={`${completed}`} />
      <button
        type="submit"
        aria-disabled={pending}
        className="w-full h-full flex justify-center items-center"
      >
        {completed ? (
          <svg
            className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
        ) : (
          <svg
            className="w-3.5 h-3.5 mr-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
        )}
      </button>
    </form>
  );
}
