import Contact from '@/components/contact'
import Feature from '@/components/feature'
import HeroTwo from '@/components/heroTwo'
import Image from 'next/image'
import About from '@/components/about'
import Logos from '@/components/logos'
import Hero from '@/components/hero'
import AboutTwo from '@/components/aboutTwo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zbrojenie Budowlane - Zbrojarnia Transbet',
  description: 'Zbrojarnia Transbet oferuje prefabrykaty zbrojeniowe, zbrojenia budowlane i stal budowlaną.',
}

export default function Home() {
  return (
    <>
      {/* <HeroTwo /> */}
      <Hero />
      <Feature />
      {/* <Logos /> */}
      {/* <AboutTwo /> */}
      <About />
    </>
  )
}
