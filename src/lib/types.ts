import { Prisma } from "@prisma/client";

export type Success<T> = {
  success: true;
  data: T;
  error?: never;
};

export type Failure = {
  success: false;
  data?: never;
  error: string;
};

export type Result<T> = Success<T> | Failure;

// *********

// lib/types.ts o validation.ts

// export type NoteWithCategory = Prisma.NoteGetPayload<{
//   include: { category: true }
// }>;

// Oppure se selezioni solo alcuni campi della categoria
export type NoteWithCategory = Prisma.NoteGetPayload<{
  include: {
    category: {
      select: {
        id: true;
        name: true;
        color: true;
      };
    };
  };
}>;
