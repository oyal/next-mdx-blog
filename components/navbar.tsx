import Link from 'next/link'
import { Github } from 'lucide-react'

import ThemeToggle from '@/components/theme-toggle'

const Navbar = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center justify-between bg-white dark:bg-zinc-950">
      <Link href="/" className="group relative text-2xl font-bold">
        NEXT_BLOG
        <div className="absolute bottom-0 h-[2px] w-0 bg-zinc-950 transition-all group-hover:w-full dark:bg-zinc-50"></div>
      </Link>
      <div className="flex items-center gap-1">
        <Link
          href="https://www.github.com/oyal"
          target="_blank"
          className="inline-flex rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900"
        >
          <Github className="h-5 w-5" />
        </Link>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Navbar
