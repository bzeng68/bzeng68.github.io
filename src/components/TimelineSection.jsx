import { Box, Card, CardContent, Typography, Link } from '@mui/material'
import AnimatedSection from './AnimatedSection'
import { OpenInNew } from '@mui/icons-material'

export default function TimelineSection({ title, emoji, items }) {
    return (
        <Box sx={{ width: '100%', backgroundColor: '#242424', py: 8, mt: 4 }}>
            <Box sx={{ maxWidth: '915px', mx: 'auto', px: 2, }} >
                <AnimatedSection>
                    <Typography
                        variant='h4'
                        fontWeight='bold'
                        textAlign='center'
                    >
                        {emoji} {title}
                    </Typography>
                </AnimatedSection>
                
                <Box
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 6,
                        mt: 2
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            left: 13,
                            top: 12,
                            bottom: 12,
                            width: '2px',
                            opacity: 0.6,
                            bgcolor: 'grey.400',
                        }}
                    />
                    {items.map((item, i) => <TimelineItem key={i} item={item} />)}
                </Box>
            </Box>
        </Box>
    )
}

const TimelineItem = ({ item }) => {
    return (
            <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start'}}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        width: 28,
                        flexShrink: 0,
                    }}
                >
                    <Box
                        sx={{
                            width: 14,
                            height: 14,
                            borderRadius: '50%',
                            bgcolor: '#242424',
                            border: '2px solid',
                            borderColor: 'grey.400',
                            mt: '6px',
                            zIndex: 2
                        }}
                    />
                </Box>

                <AnimatedSection>
                    <Card
                        sx={{
                            flex: 1,
                            borderRadius: 3,
                            boxShadow: '0 8px 24px rgb(0,0,0,0.25)',
                            bgcolor: '#2e2e2e',
                            color: '#fff'
                        }}
                    >
                        <CardContent sx={{ bgcolor: 'inherit', px: 3, py: 2.5 }}>
                            <TimelineItemTitle item={item}/>

                            {(item.role || item.period) && (
                                <Typography fontSize='0.9rem'>
                                    <i>{item.role}</i>
                                    {item.role && item.period && ' • '}
                                    {item.period}
                                </Typography>
                            )}

                            <Box component='ul' sx={{ mt: 1, pl: 2 }}>
                                {item.description.map((line, index) => (
                                    <li key={index}>
                                        <Typography textAlign='left' mt={0.5}>{line}</Typography>
                                    </li>
                                ))}
                            </Box>
                        </CardContent>
                    </Card>
                </AnimatedSection>
            </Box>
    )
}

const TimelineItemTitle = ({ item }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                mb: 0.5
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    width: 'fit-content',
                }}
            >
                <TimelineItemTitleBadge emoji={item.emoji} image={item.image}/>

                {item.link ? (
                    <Link
                        href={item.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        underline='none'
                        sx={{
                            display: 'flex',
                            alignContent: 'center',
                            gap: 0.5,
                            color: 'inherit',
                            cursor: 'pointer',

                            '&:hover': {
                                color: '#8ab4f8'
                            },

                            '&:hover .link-icon': {
                                opacity: 1,
                                transform: 'translateX(2px)'
                            }
                        }}
                    >
                        <Typography 
                            variant='h6' 
                            fontWeight={600}
                            component='span'
                            sx={{
                                '&:hover': {
                                    textDecoration: 'underline',
                                    textDecorationThickness: '2px',
                                    textUnderlineOffset: '3px'
                                }
                            }}
                        >
                            {item.title}
                        </Typography>
                        <OpenInNew
                            className='link-icon'
                            sx={{
                                fontSize: 16,
                                opacity: 0.6,
                                transition: 'all 0.2s ease'
                            }}
                        />
                    </Link>
                ) : (
                    <Typography variant='h6' fontWeight={600}>
                        {item.title}
                    </Typography>
                )}
            </Box>
        </Box>
    )
}

const TimelineItemTitleBadge = ({ emoji, image }) => {
    if (image) {
        return (
            <Box
                component='img'
                src={image}
                alt=''
                sx={{
                    width: 36,
                    height: 36,
                    borderRadius: 2,
                    objectFit: 'contain',
                    bgcolor: '#1e1e1e',
                    p: 0.75
                }}
            />
        )
    }

    if (emoji) {
        return (
            <Box
                sx={{
                    width: 36,
                    height: 36,
                    borderRadius: 2,
                    bgcolor: '#1e1e1e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem'
                }}
            >
                {emoji}
            </Box>
        )
    }

    return null
}