import { useLoaderData } from "react-router";

import { loader as dataLoader } from "./data";

export async function loader() {
  const res = await dataLoader();
  if (res && typeof (res as Response).text === "function") {
    const text = await (res as Response).text();
    try {
      return JSON.parse(text);
    } catch {
      return text;
    }
  }
  return res;
}

export default function SSRPage() {
  const data = useLoaderData() as Array<{ id: number; title: string }>;

  return (
    <main>
      <h1>Server Side Rendered Page (SSR)</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </main>
  );
}
