import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ScrollFadeIn({ children }) {
  const ref = useRef(null)
  const { scrollY } = useScroll()

  const opacity = useTransform(scrollY, () => {
    if (!ref.current) return 1
    const rect = ref.current.getBoundingClientRect()
    const vpH = window.innerHeight
    // start fading in when top of element is at bottom of viewport, fully visible at 30% down
    const progress = 1 - (rect.top - vpH * 0.3) / (vpH * 0.7)
    return Math.min(1, Math.max(0, progress))
  })

  return (
    <motion.div ref={ref} style={{ opacity }}>
      {children}
    </motion.div>
  )
}
