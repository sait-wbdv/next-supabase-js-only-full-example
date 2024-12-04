"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(formData) {
  const client = await createClient();
  const { error } = await supabase.auth.signInWithPassword(data);
  if (error) {
    redirect("/error");
  }
}
