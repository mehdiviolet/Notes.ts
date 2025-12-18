"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { categorySchema, InputCategory } from "../lib/validation";
import { createCategoty } from "../actions/category-action";
import { zodResolver } from "@hookform/resolvers/zod";

export default function CategoriesForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<InputCategory>({
    resolver: zodResolver(categorySchema),
  });

  const onSubHandle = async (data: InputCategory) => {
    const myRes = await createCategoty(data);

    if (myRes.success) {
      console.log("it is ok!");
      reset();

      return myRes.data;
    }
  };

  return (
    <form
      className="bg-white p-6 rounded-lg border space-y-4"
      onSubmit={handleSubmit(onSubHandle)}
    >
      <div>
        <label className="block text-sm font-medium mb-1">Nome</label>
        <input
          placeholder="Lavoro, Personale..."
          className="w-full px-3 py-2 border rounded-md"
          {...register("name")}
        />
        {errors && <p>{errors.name?.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Colore</label>
        <input
          type="color"
          defaultValue="#6366f1"
          className="w-full h-10 border rounded-md"
          {...register("color")}
        />
        {errors && <p>{errors.color?.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Crea Categoria
      </button>
      {isSubmitting && (
        <p className="text-green-500 font-bold">is submiting...</p>
      )}
    </form>
  );
}
