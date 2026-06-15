
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { TechMatrix } from './components/TechMatrix'
import { CaseStudies } from './components/CaseStudies'
import { Timeline } from './components/Timeline'

function App() {
  return (
    <div className="min-h-screen bg-secondary selection:bg-accent selection:text-primary font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <TechMatrix />
        <CaseStudies />
        <Timeline />
      </main>
      
      <footer className="py-8 text-center text-gray-500 border-t border-white/5 bg-primary">
        <p>© {new Date().getFullYear()} Ashidul Islam. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
