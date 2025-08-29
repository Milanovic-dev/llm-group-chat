export default function Home() {
  return (
    <main className="flex min-h-screen">
      <aside className="w-64 border-r" />
      <section className="flex flex-1 flex-col">
        <div className="flex-1 p-4" />
        <form className="p-4 flex justify-center">
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full max-w-xl border rounded p-2"
          />
        </form>
      </section>
    </main>
  );
}
