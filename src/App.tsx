import { useEffect } from 'react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Showcase } from './components/Showcase'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export default function App() {
  useEffect(() => {
    // Reduce motion prefers
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (prefersReduced.matches) {
      document.documentElement.classList.add('motion-reduce')
    }
  }, [])

  return (
    <div className="min-h-screen bg-ink bg-mesh">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
