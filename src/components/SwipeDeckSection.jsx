import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import CardModal from './CardModal'

export default function SwipeDeckSection({ panels }) {
  const [selectedCard, setSelectedCard] = useState(null)

  return (
    <Box className='section section--deck'>
      <Box className='deck-stick'>
        <Box className='deck-header'>
          <Typography variant='overline' className='section-kicker'>
            Experience and projects
          </Typography>
          <Typography variant='h4' className='deck-title'>
            Experience
          </Typography>
        </Box>

        <Box className='deck-stack'>
          <Box className='deck-panel deck-panel--experience'>
            <Box className='deck-grid deck-grid--experience'>
              {panels[0].items.map((item) => (
                <Box
                  key={item.title}
                  className='deck-card'
                  component='button'
                  onClick={() => setSelectedCard(item)}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {item.icon
                      ? <img src={item.icon} alt={item.title} className='deck-card-icon' />
                      : <Typography className='deck-card-emoji'>{item.emoji}</Typography>
                    }
                    <Typography variant='h6' className='deck-card-title'>
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography className='deck-card-meta'>{item.meta}</Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box className='deck-panel deck-panel--projects'>
            <Box className='deck-header deck-header--projects'>
              <Typography variant='h4' className='deck-title'>
                Projects
              </Typography>
            </Box>
            <Box className='deck-grid deck-grid--projects'>
              {panels[1].items.map((item) => (
                <Box
                  key={item.title}
                  className='deck-card'
                  component='button'
                  onClick={() => setSelectedCard(item)}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {item.icon
                      ? <img src={item.icon} alt={item.title} className='deck-card-icon' />
                      : <Typography className='deck-card-emoji'>{item.emoji}</Typography>
                    }
                    <Typography variant='h6' className='deck-card-title'>
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography className='deck-card-meta'>{item.meta}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      <CardModal card={selectedCard} onClose={() => setSelectedCard(null)} />
    </Box>
  )
}