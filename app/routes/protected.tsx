import { redirect } from "react-router";

export function loader({ request }: { request: Request }) {
  const cookie = request.headers.get("cookie") || "";
  const isAuthenticated = /auth=\w+/.test(cookie);
  if (!isAuthenticated) {
    return redirect("/login");
  }
  return null;
}

export default function Protected() {
  return (
    <main>
      <h1>Protected Page</h1>
      <p>You are authenticated!</p>
      <form method="post" action="/logout">
        <button type="submit">Logout</button>
      </form>
    </main>
  );
}
