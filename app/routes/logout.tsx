import { redirect } from "react-router";

export function action() {
  return new Response(null, {
    status: 302,
    headers: {
      "Set-Cookie": "auth=; Path=/; Max-Age=0",
      "Location": "/login"
    }
  });
}

export default function Logout() {
  return null;
}
