"use client";

import React from "react";
import { CategoryWithNotes } from "../lib/validation";
import { deleteCategory } from "../actions/category-action";

export default function CategoriesList({
  categories,
}: {
  categories: CategoryWithNotes[];
}) {
  const handleDelete = async (id: string) => {
    await deleteCategory(id);
  };
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Le tue categorie ({categories.length})
      </h2>
      <div className="space-y-2">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="flex items-center justify-between p-4 bg-white border rounded-lg hover:shadow-md transition"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: cat.color }}
              />
              <div>
                <p className="font-medium">{cat.name}</p>
                <p className="text-sm text-gray-500">{cat.noteCount} note</p>
              </div>
            </div>

            <button
              className="text-red-600 hover:text-red-700 px-3 py-1"
              onClick={() => handleDelete(cat.id)}
            >
              Elimina
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
