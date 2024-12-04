import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <form className="my-20 mx-12 flex flex-col gap-4">
      <div className="flex gap-2">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="text-black"
        />
      </div>
      <div className="flex gap-2">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          className="text-black"
        />
      </div>
      <div className="flex gap-4">
        <button formAction={login}>Log In</button>
        <button formAction={signup}>Sign Up</button>
      </div>
    </form>
  );
}
