import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 dark:border-stone-800">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-stone-500 sm:flex-row dark:text-stone-400">
        <p>© {new Date().getFullYear()} My Thoughts. Written slowly, on purpose.</p>
        <nav className="flex gap-5">
          <Link href="/" className="hover:text-stone-900 dark:hover:text-white">Home</Link>
          <Link href="/about" className="hover:text-stone-900 dark:hover:text-white">About</Link>
        </nav>
      </div>
    </footer>
  );
}
