'use client'

import Link from 'next/link'

export const h2 = function H2({
  children,
  id,
  ...props
}: React.ComponentPropsWithoutRef<'h2'>) {
  return (
    <h2 id={id} {...props} className="scroll-mt-16">
      <Link
        href={`#${id}`}
        className="text-inherit no-underline hover:text-inherit"
      >
        {children}
      </Link>
    </h2>
  )
}
