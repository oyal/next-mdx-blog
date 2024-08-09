'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const TextGenerateEffect = () => {
  const ref = useRef<HTMLHeadingElement>(null)
  const isInView = useInView(ref)
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('animate')
    } else {
      controls.start('initial')
    }
  }, [controls, isInView])

  return (
    <div className="flex items-center justify-center p-4">
      <motion.h1
        ref={ref}
        initial="initial"
        animate={controls}
        className="space-x-1 space-y-4 text-xl font-bold"
      >
        {'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, tenetur.'
          .split(' ')
          .map((item, index) => (
            <motion.span
              key={index}
              variants={{
                initial: {
                  opacity: 0,
                  filter: 'blur(10px)',
                  translateY: '20%',
                },
                animate: {
                  opacity: 1,
                  filter: 'blur(0px)',
                  translateY: '0%',
                },
              }}
              transition={{
                duration: 0.5,
                delay: 0.02 * index,
              }}
              className="inline-block"
            >
              {item}
            </motion.span>
          ))}
      </motion.h1>
    </div>
  )
}

export default TextGenerateEffect
