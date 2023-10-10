import Contact from '@/components/contact'
import Feature from '@/components/feature'
import Hero from '@/components/hero'
import Image from 'next/image'
import About from '@/components/about'
import Logos from '@/components/logos'

export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <About />
      <Contact />
    </>
  )
}
