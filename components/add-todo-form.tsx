"use client";

import React, { useRef } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { addTodo } from "@/actions/todo-actions";
import type { Todo } from "@/typings/todo";

type Props = {
  optimisticAction: (todo: Todo) => void;
};

export default function AddTodoForm({ optimisticAction }: Props) {
  const { pending } = useFormStatus();
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    formRef.current?.reset();

    // Optimistic UI
    optimisticAction({
      id: +new Date(),
      content: formData.get("content") as string,
      completed: false,
    });

    // Update DB
    await addTodo(formData);
  }

  return (
    <form
      ref={formRef}
      name="add-todo"
      action={handleSubmit}
      className="flex flex-col w-full mt-16"
    >
      <input
        type="text"
        name="content"
        className="rounded px-4 py-2 mb-4"
        placeholder="Write your todo..."
        required
      />
      <button
        aria-disabled={pending}
        className="rounded bg-gray-700 text-white p-2"
      >
        Add
      </button>
    </form>
  );
}
