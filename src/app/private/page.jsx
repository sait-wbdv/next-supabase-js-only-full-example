import { redirect } from "next/navigation";
import { addCharacter } from "./actions";
import { createClient } from "@/utils/supabase/server";

export default async function PrivatePage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  return (
    <section>
      <header>
        <h2>Hello {data.user.email}!</h2>
        <p>
          we are pleased to invite you to this site. Add a new character to our
          star wars database
        </p>
      </header>
      <form>
        <label htmlFor="last-name">last name</label>
        <input
          type="text"
          name="last-name"
          id="last-name"
          className="text-black"
        />
        <label htmlFor="first-name">first name</label>
        <input
          type="text"
          name="first-name"
          id="first-name"
          className="text-black"
        />
        <button formAction={addCharacter}>Add Character</button>
      </form>
    </section>
  );
}
