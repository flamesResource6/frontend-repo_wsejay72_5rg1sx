import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import AISection from './components/AISection'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0F172A] font-sans text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <AISection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
