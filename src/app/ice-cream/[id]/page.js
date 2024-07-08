//This is a dynamic route
//to access the value of the url params, we can desturcture the params object
//this object will have a propterty, the name of the dynamic route (folder name), and the value will be whatver the user writes in the url params
import Link from "next/link";

export default function IdPage({ params }) {
  console.log(params);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This is the id nested route</h1>
      <p>These are the params:{params.id}</p>
      <Link href="/ice-cream/1/john">Nested Dynamic Route</Link>
      <Link href="/ice-cream/1/This-is-also-a-comment-id">
        Nested Dynamic Route 2
      </Link>
    </main>
  );
}
