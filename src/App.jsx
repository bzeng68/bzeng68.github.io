import React from 'react'
import './App.css'
import Headshot from './components/Headshot'
import AnimatedSection from './components/AnimatedSection'
import ContactButtons from './components/ContactButtons'
import NameDescription from './components/NameDescription'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'

function App() {
  return (
    <>
      <AnimatedSection>
        <Headshot/>
        <NameDescription/>
        <ContactButtons/>
      </AnimatedSection>
      <ExperienceSection/>
      <ProjectsSection/>
    </>
  )
}

export default App
