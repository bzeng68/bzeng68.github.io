import { Description, Email, GitHub, LinkedIn } from "@mui/icons-material"
import { Stack, Button } from "@mui/material"

export default function ContactButtons() {
    return (
        <Stack
            direction='row'
            spacing={2}
            justifyContent='center'
            sx={{ marginTop: '15px', flexWrap: 'wrap' }}
        >
            <Button
                variant='contained'
                href='/BZeng_CS_Resume_Public.pdf'
                target='_blank'
                startIcon={<Description/>}
                sx={{
                    backgroundColor: '#6c757d',
                    color: '#fff',
                    '&:hover': { backgroundColor: '#5a6268', color: '#fff' }
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
                    backgroundColor: '#0077b5',
                    color: '#fff',
                    '&:hover': { backgroundColor: '#005983', color: '#fff' }
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
                    backgroundColor: '#24292f',
                    color: '#fff',
                    '&:hover': { backgroundColor: '#1b1f23', color: '#fff' }
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
                    backgroundColor: '#8e6ca3',
                    color: '#fff',
                    '&:hover': { backgroundColor: '#7b5991', color: '#fff' }
                }}
            >
                Email
            </Button>
        </Stack>
    )
}