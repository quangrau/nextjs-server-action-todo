"use server";

import { Todo } from "@/typings/todo";
import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";

const TODO_KEY = "todo";

export const addTodo = async (formData: FormData) => {
  const id = +new Date();
  const content = formData.get("content") as string;

  const newTodo = {
    id,
    content,
    completed: false,
  };

  try {
    await kv.hset(TODO_KEY, {
      [id]: newTodo,
    });
  } catch (error) {}

  revalidatePath("/");
};

export const removeTodo = async (formData: FormData) => {
  const id = formData.get("id") as string;

  if (id) {
    try {
      await kv.hdel(TODO_KEY, id);
    } catch (error) {}
  }

  revalidatePath("/");
};

export const toggleTodo = async (formData: FormData) => {
  const id = formData.get("id") as string;
  const todo = await kv.hget<Todo>(TODO_KEY, id);

  if (todo) {
    try {
      await kv.hset(TODO_KEY, {
        [id]: {
          ...todo,
          completed: !todo.completed,
        },
      });
    } catch (error) {}
  }

  revalidatePath("/");
};
