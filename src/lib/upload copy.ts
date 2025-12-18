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

    // USA QUESTO invece del tuo URL manuale:
    const { data } = supabase.storage
      .from("note-covers")
      .getPublicUrl(fileName);

    return data.publicUrl;
  } catch (error) {
    console.error("Upload error:", error);
    return null;
  }
}
