export default function AboutIdPage({ params }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This is the section of the about page that shows: {params.id} </h1>
    </main>
  );
}
