import { redirect } from "react-router";

export async function action({ request }: { request: Request }) {
  const formData = new URLSearchParams(await request.text());
  const username = formData.get("username");
  const password = formData.get("password");

  // Simple demo: accept any non-empty username/password
  if (username && password) {
    // Set cookie (for demo, not secure)
    return new Response(null, {
      status: 302,
      headers: {
        "Set-Cookie": `auth=${username}; Path=/;`,
        "Location": "/protected"
      }
    });
  }
  return redirect("/login?error=1");
}

export default function Login() {
  return (
    <main>
      <h1>Login</h1>
      <form method="post">
        <input name="username" placeholder="Username" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
