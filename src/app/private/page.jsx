import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export default async function PrivatePage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  return (
    <section>
      <h2>Hello {data.user.email}!</h2>
      <p>we are pleased to invite you to this site</p>
    </section>
  );
}
