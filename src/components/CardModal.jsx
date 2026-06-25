import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from '@mui/material'
import { OpenInNew } from '@mui/icons-material'

export default function CardModal({ card, onClose }) {
  return (
    <Dialog
      open={Boolean(card)}
      onClose={onClose}
      fullWidth
      maxWidth='sm'
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(3, 6, 12, 0.82)',
            backdropFilter: 'blur(3px)',
          },
        },
      }}
      PaperProps={{
        sx: {
          background: 'linear-gradient(180deg, rgba(22, 27, 38, 1), rgba(16, 20, 28, 1))',
          color: 'rgba(255,255,255,0.92)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 28px 90px rgba(0,0,0,0.65)',
        },
      }}
    >
      {card && (
        <>
          <DialogTitle sx={{ px: 4, pt: 3.5, pb: 1.5 }}>
            <Stack direction='row' spacing={1.5} alignItems='center'>
              {card.icon
                ? <img src={card.icon} alt={card.title} className='modal-icon' />
                : <Box className='modal-emoji'>{card.emoji}</Box>
              }
              <Box>
                <Typography variant='h5' component='div'>
                  {card.title}
                </Typography>
                {card.role && (
                  <Typography className='modal-meta'>{card.role}</Typography>
                )}
                <Typography className='modal-meta'>{card.meta}</Typography>
              </Box>
            </Stack>
          </DialogTitle>
          <DialogContent dividers sx={{ px: 4, py: 3 }}>
            <Box component='ul' sx={{ m: 0, pl: 3, display: 'grid', gap: 1.25 }}>
              {card.details.map((detail) => (
                <Box key={detail} component='li' sx={{ color: 'rgba(255,255,255,0.92)' }}>
                  <Typography className='modal-detail'>
                    {detail}
                  </Typography>
                </Box>
              ))}
            </Box>
          </DialogContent>
          <DialogActions sx={{ justifyContent: 'space-between', px: 4, py: 2.5 }}>
            <Button
              onClick={onClose}
              variant='outlined'
              sx={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.7)', '&:hover': { borderColor: 'rgba(255,255,255,0.6)' } }}
            >
              Close
            </Button>
            {card.link ? (
              <Button
                href={card.link}
                target='_blank'
                rel='noopener noreferrer'
                endIcon={<OpenInNew />}
                variant='outlined'
                sx={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.7)', '&:hover': { borderColor: 'rgba(255,255,255,0.6)' } }}
              >
                Open link
              </Button>
            ) : (
              <Box />
            )}
          </DialogActions>
        </>
      )}
    </Dialog>
  )
}