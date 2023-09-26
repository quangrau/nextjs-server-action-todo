import React from "react";

export default function TodoForm() {
  return (
    <form action="" className="flex flex-col w-full mt-16">
      <input
        type="text"
        name="content"
        className="rounded px-4 py-2 mb-4"
        placeholder="Write your todo..."
        required
      />
      <button className="rounded bg-gray-700 text-white p-2">Add</button>
    </form>
  );
}
