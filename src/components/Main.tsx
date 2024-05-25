// Component
export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="main">
        <article className="article">{children}</article>
      </main>
    </>
  );
}
