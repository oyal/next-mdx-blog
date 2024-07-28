import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

const Counter = () => {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  })

  const isInView = useInView(ref, {
    once: true,
  })

  useEffect(() => {
    if (isInView) {
      motionValue.set(123123)
    }
  }, [motionValue, isInView])

  useEffect(
    () =>
      springValue.on('change', (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat('en-US').format(
            +latest.toFixed(0),
          )
        }
      }),
    [springValue],
  )

  return <span ref={ref} className="text-2xl font-bold" />
}

export default Counter
