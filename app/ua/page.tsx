import Footer from '@/components/footer'
import Feature from '../ua//components/feature'
import About from '../ua/components/about'
import Hero from '../ua/components/hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zbrojenie Budowlane - Zbrojarnia Transbet',
  description: 'Zbrojarnia Transbet oferuje prefabrykaty zbrojeniowe, zbrojenia budowlane i stal budowlaną.',
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
