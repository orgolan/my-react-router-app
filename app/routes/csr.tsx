import React from "react";
import { useLoaderData } from "react-router";

// Hint to the dev server to avoid SSR for this module.
export const ssr = false;

export async function clientLoader() {
  // runs only in the browser; perform client-side fetch here
  const res = await fetch("/data");
  if (!res.ok) throw new Response("Failed to fetch data", { status: res.status });
  return res.json();
}

export default function CSRPage() {
  const data = useLoaderData() as Array<{ id: number; title: string }>;

  return (
    <main>
      <h1>Client Side Rendered Page (CSR)</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </main>
  );
}
