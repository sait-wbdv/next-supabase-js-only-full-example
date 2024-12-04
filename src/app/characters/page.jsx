import { createClient } from "@/utils/supabase/server";

export default async function Characters() {
  const supabase = await createClient();
  const { data: characters } = await supabase.from("characters").select();
  return (
    <ul>
      {characters.map((character) => (
        <li key={character.id}>
          {character.first_name} {character.last_name}
        </li>
      ))}
    </ul>
  );
}
