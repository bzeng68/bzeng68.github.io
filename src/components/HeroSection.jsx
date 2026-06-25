import { Box, Stack, Typography } from '@mui/material'
import ContactButtons from './ContactButtons'

const statements = ['Build products 0-1.', 'Ship fast and reliably.', 'Scale with intent.']

export default function HeroSection({ embedded = false }) {
  const content = (
    <>
      <Typography variant='overline' className='section-kicker'>
        What I do
      </Typography>

      <Stack spacing={1.5}>
        {statements.map((statement) => (
          <Typography key={statement} variant='h3' className='hero-statement'>
            {statement}
          </Typography>
        ))}
      </Stack>

      <Typography className='hero-copy'>
        I build production-ready full-stack and ML systems, from product features to resilient data platforms.
      </Typography>

      <Typography className='hero-location'>Open to high-impact product and platform work in Boston and NYC</Typography>

      <ContactButtons />
    </>
  )

  if (embedded) {
    return (
      <Box className='intro-hero-layer' component='div'>
        {content}
      </Box>
    )
  }

  return (
    <Box className='section section--hero'>
      <Box className='hero-card' component='div'>
        {content}
      </Box>
    </Box>
  )
}