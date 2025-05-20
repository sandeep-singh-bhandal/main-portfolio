import React from 'react'
import HeroContent from '../components/HeroContent'
import Skills from '@/components/Skills'

const Hero = () => {
  return (
    <section className='relative flex flex-col h-full w-full'>
      <HeroContent />
      <Skills/>
    </section>
  )
}

export default Hero
