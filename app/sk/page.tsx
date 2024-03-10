import Feature from './components/feature'
import About from './components/about'
import Hero from './components/hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stavebná výstuž - Transbet Armory',
  description: 'Závod na výstuž Transbet ponúka prefabrikované výstužné prvky, konštrukčnú výstuž a stavebnú oceľ.',
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
