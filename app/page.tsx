export default function Home() {
  return (
    <div
      className="relative min-h-screen overflow-hidden text-[color:var(--ink)]"
      style={
        {
          "--ink": "#1f1a16",
          "--muted": "#5c544c",
          "--accent": "#f06b4f",
          "--accent-2": "#3a7bd5",
        } as React.CSSProperties
      }
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 70% 15%, rgba(240, 107, 79, 0.25), transparent 60%), radial-gradient(50% 50% at 15% 85%, rgba(58, 123, 213, 0.2), transparent 55%), linear-gradient(180deg, #fff7ef 0%, #f6f0e8 40%, #eef2ff 100%)",
        }}
      />
      <div className="absolute -top-24 right-[-6rem] h-72 w-72 rounded-full bg-[color:var(--accent)] opacity-40 blur-3xl" />
      <div className="absolute -bottom-28 left-[-4rem] h-80 w-80 rounded-full bg-[color:var(--accent-2)] opacity-30 blur-3xl" />
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-20">
        <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--muted)] animate-rise">
          Personal site
        </p>
        <h1 className="mt-6 text-5xl font-semibold leading-[1.05] sm:text-7xl animate-rise-delayed">
          Hello, world.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-[color:var(--muted)] animate-rise-late">
          This is my new corner of the internet. I&apos;m setting things up and
          will share more soon. Thanks for stopping by.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4 text-sm font-medium animate-rise-late">
          <span className="rounded-full border border-black/10 bg-white/70 px-4 py-2">
            Status: building
          </span>
          <span className="rounded-full bg-[color:var(--ink)] px-4 py-2 text-white">
            Next update: soon
          </span>
        </div>
      </main>
    </div>
  );
}
