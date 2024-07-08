import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This is the About page</h1>
      <Link href="/about/company-info">View company info</Link>
    </main>
  );
}
