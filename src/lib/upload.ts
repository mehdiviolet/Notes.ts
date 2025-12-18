import { supabase } from "../lib/supabase";

export async function uploadImage(file: File): Promise<string | null> {
  try {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()
      .toString(36)
      .substring(2)}-${Date.now()}.${fileExt}`;

    const { error } = await supabase.storage
      .from("note-covers")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) throw error;

    // URL pubblico diretto
    const publicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/note-covers/${fileName}`;

    return publicUrl;
  } catch (error) {
    console.error("Upload error:", error);
    return null;
  }
}
