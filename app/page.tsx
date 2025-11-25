import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import AIChatBot from '@/components/AIChatBot'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <AIChatBot />
      
      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12 mt-32" id="contact">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3">
                Abdeljabbar MOUDIRI
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Développeur Full Stack passionné par la création d&apos;applications web performantes.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-3">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors">À Propos</a></li>
                <li><a href="#experience" className="text-slate-400 hover:text-cyan-400 transition-colors">Expérience</a></li>
                <li><a href="#projects" className="text-slate-400 hover:text-cyan-400 transition-colors">Projets</a></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-3">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li>📍 Safi, Maroc</li>
                <li>✉️ abdeljabbarmoudiri17@gmail.com</li>
                <li>📞 +212 677 713 460</li>
                <li className="flex gap-3 pt-2">
                  <a href="https://github.com/Abdelmoudiri" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
                  <span>•</span>
                  <a href="https://www.linkedin.com/in/abdeljabbar-moudiri/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-slate-400 text-sm">
            <p>© 2025 Abdeljabbar MOUDIRI. Crafted with Next.js, TypeScript & Framer Motion.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
