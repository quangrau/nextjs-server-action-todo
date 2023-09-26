"use client";

import { experimental_useOptimistic as useOptimistic } from "react";
import AddTodoForm from "@/components/add-todo-form";
import TodoList from "@/components/todo-list";
import type { Todo } from "@/typings/todo";

type Props = {
  todos: Todo[];
};

export default function TodoComponent({ todos }: Props) {
  // Optimistic UI
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo: Todo) => {
      return [...state, newTodo];
    }
  );

  return (
    <>
      <AddTodoForm optimisticAction={addOptimisticTodo} />
      <TodoList todos={optimisticTodos} />
    </>
  );
}
