import Contact from '@/components/contact'
import Feature from '@/components/feature'
import HeroTwo from '@/components/heroTwo'
import Image from 'next/image'
import About from '@/components/about'
import Logos from '@/components/logos'
import Hero from '@/components/hero'

export default function Home() {
  return (
    <>
      {/* <HeroTwo /> */}
      <Hero />
      <Logos />
      <About />
      <Contact />
    </>
  )
}
