export default function CommentPage({ params }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Ice Cream Page ID: {params.id}, Comment ID: {params.commentId}
      </h1>
    </main>
  );
}
