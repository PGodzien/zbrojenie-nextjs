import Feature from './components/feature'
import About from './components/about'
import Hero from './components/hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stavební výztuž - Transbet Armory',
  description: 'Výztuž Transbet nabízí prefabrikované výztužné prvky, stavební výztuž a konstrukční ocel.',
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
