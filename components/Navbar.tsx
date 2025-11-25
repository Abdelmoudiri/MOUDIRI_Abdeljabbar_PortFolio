'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'À Propos' },
    { href: '#experience', label: 'Expérience' },
    { href: '#projects', label: 'Projets' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AM
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/Abdelmoudiri"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-hover flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdeljabbar-moudiri/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-hover flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-lg glass-hover flex items-center justify-center text-slate-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-slate-300 hover:text-cyan-400 transition-colors font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 pt-4">
                <a
                  href="https://github.com/Abdelmoudiri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-lg glass-hover flex items-center justify-center gap-2 text-slate-300"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/abdeljabbar-moudiri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-lg glass-hover flex items-center justify-center gap-2 text-slate-300"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
