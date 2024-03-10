import Footer from '@/components/footer'
import Feature from '../ua//components/feature'
import About from '../ua/components/about'
import Hero from '../ua/components/hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Посилення будівництва - Transbet Armory',
  description: 'Арматурний завод «Трансбет» пропонує збірні арматурні елементи, будівельну арматуру та будівельну сталь.',
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
