import './App.css'
import { Box } from '@mui/material'
import TaglineSection from './components/TaglineSection'
import SwipeDeckSection from './components/SwipeDeckSection'
import ContactSection from './components/ContactSection'
import ScrollFadeIn from './components/ScrollFadeIn'
import { experienceCards, projectCards } from './content/portfolioData'

function App() {
  return (
    <Box className='app-shell'>
      <TaglineSection />
      <ScrollFadeIn>
        <SwipeDeckSection
          panels={[
            { title: 'Experience', emoji: '🚀', items: experienceCards },
            { title: 'Projects', emoji: '💡', items: projectCards },
          ]}
        />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <ContactSection />
      </ScrollFadeIn>
    </Box>
  )
}

export default App
