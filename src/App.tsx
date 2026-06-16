import React, { Suspense } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { CurrentlyBuilding } from './components/CurrentlyBuilding'
import { SelectedWork } from './components/SelectedWork'

// Lazy load below-the-fold components for performance
const HowIBuild = React.lazy(() => import('./components/HowIBuild').then(module => ({ default: module.HowIBuild })))
const Certifications = React.lazy(() => import('./components/Certifications').then(module => ({ default: module.Certifications })))
const Contact = React.lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })))

function App() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-emerald-500/30 selection:text-emerald-200 font-sans">
      <Navbar />
      <main>
        {/* Critical Path components loaded instantly */}
        <HeroSection />
        <CurrentlyBuilding />
        <SelectedWork />
        
        {/* Lazy Loaded components */}
        <Suspense fallback={<div className="h-96 flex items-center justify-center text-gray-500">Loading...</div>}>
          <HowIBuild />
          <Certifications />
          <Contact />
        </Suspense>
      </main>
      
      <footer className="py-8 text-center text-gray-500 border-t border-white/5 bg-[#050505] text-sm">
        <p>© {new Date().getFullYear()} Ashidul Islam. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
