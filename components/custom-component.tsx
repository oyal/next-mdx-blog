import { useState } from "react";

import { motion } from "framer-motion";

const navs = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const CustomComponent = () => {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <div className="not-prose mx-auto grid h-full max-w-2xl place-items-center space-y-4 py-4">
      <div className="space-y-8">
        <ul className="flex gap-2">
          {navs.map((nav, index) => (
            <li key={index} className="relative">
              <a
                href={nav.href}
                className="block rounded-md px-4 py-2 text-sm font-medium"
                onClick={() => {
                  setActiveNav(nav.href);
                }}
              >
                {nav.name}

                {nav.href === activeNav && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-zinc-100 dark:bg-zinc-900"
                    layoutId="activeNav"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-2">
          {navs.map((nav, index) => (
            <li key={index} className="relative">
              <a
                href={nav.href}
                className="block rounded-md px-4 py-1 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900"
                onClick={() => {
                  setActiveNav(nav.href);
                }}
              >
                {nav.name}

                {nav.href === activeNav && (
                  <motion.span
                    className="absolute inset-y-0 -left-1 w-1 rounded-full bg-zinc-200 dark:bg-zinc-900"
                    layoutId="activeNav2"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomComponent;
