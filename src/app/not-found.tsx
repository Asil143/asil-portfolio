import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-start justify-center px-6 py-20 text-center sm:items-center">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
        404
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.03] active:scale-[0.98]"
      >
        Back to homepage
      </Link>
    </main>
  );
}
