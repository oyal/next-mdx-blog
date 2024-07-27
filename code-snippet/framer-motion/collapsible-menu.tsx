'use client'

import { useState } from 'react'
import * as Collapsible from '@radix-ui/react-collapsible'
import { AnimatePresence, motion } from 'framer-motion'

export default function CollapsibleMenu() {
  const [open, setOpen] = useState(false)
  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger asChild>
        <button className="flex items-center gap-1 rounded-md bg-zinc-100 px-2 py-0.5 dark:bg-zinc-800">
          Toggle
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          )}
        </button>
      </Collapsible.Trigger>
      <AnimatePresence initial={false}>
        {open && (
          <Collapsible.Content forceMount>
            <motion.div
              animate={{
                opacity: 1,
                height: 'auto',
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              initial={{
                opacity: 0,
                height: 0,
              }}
            >
              Content
            </motion.div>
          </Collapsible.Content>
        )}
      </AnimatePresence>
    </Collapsible.Root>
  )
}
