"use server";

import { createClient } from "@/utils/supabase/server";

export async function addCharacter(formData) {
  const supabase = await createClient();
  const data = {
    last_name: formData.get("last-name"),
    first_name: formData.get("first-name"),
  };
  const { error } = await supabase
    .from("characters")
    .insert([{ last_name: data.last_name, first_name: data.first_name }])
    .select();

  if (error) {
    console.error("There was an error uploading data", error);
  }
}
