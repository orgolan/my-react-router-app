export function loader() {
  return new Response(JSON.stringify([{ id: 1, title: "lorem ipsum" }, { id: 2, title: "dolor sit amet" }]), {
     status: 200,
     headers: {
      "Content-Type": "application/json",
      // allow browsers to cache this response for 60 seconds
      "Cache-Control": "public, max-age=60"
     },
  });
}

