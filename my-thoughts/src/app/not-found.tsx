import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-5 py-24 text-center">
      <p className="text-6xl font-semibold tracking-tight">404</p>
      <h1 className="mt-4 text-xl font-medium">This thought wandered off.</h1>
      <p className="mt-2 text-stone-500 dark:text-stone-400">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-amber-50 transition hover:bg-stone-700 dark:bg-amber-50 dark:text-stone-900 dark:hover:bg-amber-200"
      >
        Back home
      </Link>
    </main>
  );
}
