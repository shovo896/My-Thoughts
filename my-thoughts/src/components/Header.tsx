import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[#faf7f2]/90 backdrop-blur dark:border-stone-800 dark:bg-[#12100d]/90">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-900 text-amber-50 dark:bg-amber-50 dark:text-stone-900">
            <BookOpen className="h-4.5 w-4.5" aria-hidden />
          </span>
          My Thoughts
        </Link>
        <nav className="flex items-center gap-6 text-sm text-stone-600 dark:text-stone-300">
          <Link href="/" className="transition-colors hover:text-stone-950 dark:hover:text-white">
            Home
          </Link>
          <Link href="/#explore" className="transition-colors hover:text-stone-950 dark:hover:text-white">
            Explore
          </Link>
          <Link href="/about" className="transition-colors hover:text-stone-950 dark:hover:text-white">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
