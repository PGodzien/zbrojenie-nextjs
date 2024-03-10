import Feature from './components/feature'
import About from './components/about'
import Hero from './components/hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Construction Reinforcement - Transbet Armory',
  description: 'The Transbet reinforcement plant offers prefabricated reinforcement elements, construction reinforcement and construction steel.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <About />
      {/* <Footer /> */}
    </>
  )
}
