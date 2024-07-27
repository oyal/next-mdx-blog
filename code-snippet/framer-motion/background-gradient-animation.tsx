import { useRef } from 'react'

import colors from 'tailwindcss/colors'
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion'

const BackgroundGradientAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const main = useMotionValue(colors.emerald[400] as string)
  const background = useMotionTemplate`linear-gradient(to bottom right, ${main}, #fff)`

  const handleClick = (color: keyof typeof colors) => {
    animate(main, colors[color][400])
  }

  return (
    <motion.div
      ref={containerRef}
      className="h-[250px] w-full rounded-md p-2"
      style={{ background }}
    >
      <div className="space-x-4 text-white">
        <button
          onClick={() => handleClick('emerald')}
          className="rounded-lg border border-white px-3 py-1"
        >
          Emerald
        </button>
        <button
          onClick={() => handleClick('purple')}
          className="rounded-lg border border-white px-3 py-1"
        >
          Purple
        </button>
        <button
          onClick={() => handleClick('blue')}
          className="rounded-lg border border-white px-3 py-1"
        >
          Blue
        </button>
      </div>
    </motion.div>
  )
}

export default BackgroundGradientAnimation
