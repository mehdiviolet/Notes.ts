"use server";

import {
  categorySchema,
  CategoryWithNotes,
  InputCategory,
} from "../lib/validation";
import prisma from "../../prisma/prisma";
import { Result } from "../lib/types";
import { Category } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const createCategoty = async (
  data: InputCategory
): Promise<Result<Category>> => {
  try {
    const validate = categorySchema.parse(data);
    console.log(validate);

    const category = await prisma.category.create({
      data: validate,
    });
    return { success: true, data: category };
  } catch (error) {
    return { success: false, error: "non category..." };
  }
};

export const getCategory = async (): Promise<Result<CategoryWithNotes[]>> => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { name: "asc" },
      include: {
        _count: {
          select: { notes: true },
        },
      },
    });
    // Mappa per avere noteCount invece di _count
    const categoriesWithCount = categories.map((cat) => ({
      ...cat,
      noteCount: cat._count.notes,
    }));
    return { success: true, data: categoriesWithCount };
  } catch (err) {
    return { success: false, error: "non category..." };
  }
};

export const deleteCategory = async (id: string): Promise<Result<void>> => {
  try {
    await prisma.category.delete({
      where: { id },
    });
    revalidatePath("/categories");
    return { success: true, data: undefined };
  } catch (err) {
    return { success: false, error: "non category..." };
  }
};
