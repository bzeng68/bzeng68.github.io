import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import Headshot from './Headshot'
import HeroSection from './HeroSection'

const slideIn = (x) => ({
  initial: { opacity: 0, x },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: 'easeOut' },
})

const lines = [
  { type: 'avatar' },
  { text: 'Bryan Zeng', variant: 'h2' },
  { text: '👾 Full-stack Software Engineer', variant: 'h5' },
  { text: '📖 MSCS, BS CS + Business @ Northeastern', variant: 'h6' },
]

export default function TaglineSection() {
  return (
    <Box className='section section--intro'>
      <Box className='intro-stage'>
        <motion.div className='intro-tagline-layer' {...slideIn(-60)}>
          <Box
            className='section-stack'
            component='div'
          >
            {lines.map((line, index) => (
              <Box
                key={index}
                component='div'
              >
                {line.type === 'avatar' ? (
                  <Box className='intro-avatar-shell'>
                    <Headshot />
                  </Box>
                ) : (
                  <Typography
                    variant={line.variant}
                    component='div'
                    className={line.variant === 'h2' ? 'intro-name' : 'intro-line'}
                  >
                    {line.text}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        </motion.div>

        <motion.div {...slideIn(60)}>
          <HeroSection embedded />
        </motion.div>
      </Box>
    </Box>
  )
}