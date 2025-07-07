import React from 'react'
import { Hero } from './components/pagelayout/Hero'
import { Footer } from './components/pagelayout/Footer'

export default function Home() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-white to-blue-50">
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  )
}
