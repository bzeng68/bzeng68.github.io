import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  message: '',
}

export default function ContactSection() {
  const [form, setForm] = useState(initialForm)

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(`Portfolio message from ${form.name || 'someone'}`)
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name || 'N/A'}\nEmail: ${form.email || 'N/A'}`,
    )

    window.location.href = `mailto:zeng.br@northeastern.edu?subject=${subject}&body=${body}`
  }

  return (
    <Box className='section section--contact'>
      <Box
        className='contact-card'
        component='div'
      >
        <Typography variant='overline' className='section-kicker'>
          Contact me
        </Typography>
        <Typography variant='h4' className='contact-title'>
          Let's build something useful.
        </Typography>

        <Box component='form' onSubmit={handleSubmit} className='contact-form contact-form--single'>
          <Typography className='contact-copy'>
            If you want to talk product, platform, or ML infrastructure, send a message and I’ll get back to you.
          </Typography>
          <Stack spacing={2} className='contact-fields'>
            <TextField
              label='Name'
              value={form.name}
              onChange={updateField('name')}
              fullWidth
              variant='outlined'
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label='Email'
              type='email'
              value={form.email}
              onChange={updateField('email')}
              fullWidth
              variant='outlined'
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label='What are you building?'
              multiline
              minRows={6}
              value={form.message}
              onChange={updateField('message')}
              fullWidth
              variant='outlined'
              InputLabelProps={{ shrink: true }}
            />
            <Button type='submit' variant='contained' size='large'>
              Send email
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}