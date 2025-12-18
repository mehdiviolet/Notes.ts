import React from "react";
import { getCategory } from "../actions/category-action";

export default async function CategoryFilters() {
  const { success, data: categories } = await getCategory();

  if (!success || categories.length === 0) {
    return null; // 👈 Fallisce silenziosamente
  }

  return (
    <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className="px-4 py-2 rounded-full border hover:bg-gray-100 whitespace-nowrap"
        >
          <span
            className="inline-block w-3 h-3 rounded-full mr-2"
            style={{ backgroundColor: cat.color }}
          />
          {cat.name}
        </button>
      ))}
    </div>
  );
}
