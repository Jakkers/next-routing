import Link from "next/link";

export default function IceCreamPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This is the Ice Cream Page </h1>
      <Link href="/ice-cream/1">Dynamic route</Link>
    </main>
  );
}
