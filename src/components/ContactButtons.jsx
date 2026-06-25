import { Description, Email, GitHub, LinkedIn } from '@mui/icons-material'
import { Button, Stack } from '@mui/material'

export default function ContactButtons() {
    return (
        <Stack
            direction='row'
            spacing={2}
            justifyContent='center'
            sx={{ mt: 3, flexWrap: 'wrap' }}
        >
            <Button
                variant='contained'
                href='/BZeng_CS_Resume_Public.pdf'
                target='_blank'
                startIcon={<Description/>}
                sx={{
                    backgroundColor: '#74808c',
                    color: '#f2f4f7',
                    '&:hover': {
                        backgroundColor: '#66727e',
                        color: '#ffffff',
                    }
                }}
            >
                Resume
            </Button>
            <Button
                variant='contained'
                href='https://www.linkedin.com/in/b-zeng'
                target='_blank'
                startIcon={<LinkedIn/>}
                sx={{
                    backgroundColor: '#0f7ab3',
                    color: '#ecf7ff',
                    '&:hover': {
                        backgroundColor: '#0d6fa5',
                        color: '#ffffff',
                    }
                }}
            >
                LinkedIn
            </Button>
            <Button
                variant='contained'
                href='https://www.github.com/bzeng68'
                target='_blank'
                startIcon={<GitHub/>}
                sx={{
                    backgroundColor: '#242f43',
                    color: '#f0f4fb',
                    '&:hover': {
                        backgroundColor: '#202a3c',
                        color: '#ffffff',
                    }
                }}
            >
                GitHub
            </Button>
            <Button
                variant='contained'
                href='mailto:zeng.br@northeastern.edu'
                target='_blank'
                startIcon={<Email/>}
                sx={{
                    backgroundColor: '#8d70ab',
                    color: '#f6f0ff',
                    '&:hover': {
                        backgroundColor: '#7f639c',
                        color: '#ffffff',
                    }
                }}
            >
                Email
            </Button>
        </Stack>
    )
}