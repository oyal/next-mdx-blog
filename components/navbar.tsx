import ThemeToggle from "@/components/theme-toggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <Link href="/" className="group relative text-2xl font-bold">
        NEXT_BLOG
        <div className="bg-foreground absolute bottom-0 h-[2px] w-0 transition-all group-hover:w-full"></div>
      </Link>
      <div className="flex items-center gap-2">
        <span>about</span>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Navbar;
