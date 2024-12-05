"use client";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

async function logout() {
  const { error } = await supabase.auth.signOut();
  alert("logged out. verify by checking cookies in localStorage");
  if (error) {
    console.error("Logout Error", error);
  }
}
export function LogoutButton() {
  return <button onClick={logout}>Logout</button>;
}
