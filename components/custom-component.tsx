'use client'

import { useState } from 'react'

import { motion } from 'framer-motion'

const navs = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
]

const CustomComponent = () => {
  const [activeNav, setActiveNav] = useState('#home')

  return (
    <div className="not-prose mx-auto grid h-full max-w-2xl place-items-center space-y-4 py-4">
      <div className="space-y-8">
        <div className="flex gap-2">
          {navs.map((nav, index) => (
            <button
              key={index}
              className="relative rounded-md px-4 py-2 text-sm font-medium"
            >
              <span
                className="relative z-10"
                onClick={() => {
                  setActiveNav(nav.href)
                }}
              >
                {nav.name}
              </span>
              {nav.href === activeNav && (
                <motion.span
                  className="absolute inset-0 z-0 rounded-full bg-zinc-100 dark:bg-zinc-800"
                  layoutId="tab"
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 30,
                  }}
                ></motion.span>
              )}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          {navs.map((nav, index) => (
            <div
              key={index}
              className="relative rounded-md px-4 py-1 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800"
              onClick={() => {
                setActiveNav(nav.href)
              }}
            >
              <span className="relative z-10">{nav.name}</span>
              {nav.href === activeNav && (
                <motion.span
                  className="absolute inset-y-0 -left-1 w-1 rounded-full bg-zinc-200 dark:bg-zinc-800"
                  layoutId="tab2"
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 30,
                  }}
                ></motion.span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CustomComponent
