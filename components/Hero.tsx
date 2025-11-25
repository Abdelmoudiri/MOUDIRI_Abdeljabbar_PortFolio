'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Download, MapPin } from 'lucide-react'
import Button from './ui/Button'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [text, setText] = useState('')
  const fullText = "Building robust architectures & immersive web experiences."
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div 
        className="relative z-10 max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Disponible pour de nouvelles opportunités
          </span>
        </motion.div>

        {/* Name with gradient */}
        <motion.h1 
          variants={itemVariants}
          className="text-7xl md:text-9xl font-black mb-6 leading-none"
        >
          <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            Abdeljabbar
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            MOUDIRI
          </span>
        </motion.h1>

        {/* Role */}
        <motion.div variants={itemVariants} className="mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200">
            Développeur Web <span className="text-cyan-400">Full Stack</span>
          </h2>
        </motion.div>

        {/* Typewriter effect catchphrase */}
        <motion.div 
          variants={itemVariants}
          className="mb-6 h-16 flex items-center justify-center"
        >
          <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl">
            {text}
            <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-1 animate-pulse" />
          </p>
        </motion.div>

        {/* Location */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 text-slate-400 mb-12">
          <MapPin size={18} className="text-cyan-400" />
          <span>Safi, Maroc</span>
          <span className="mx-2">•</span>
          <span className="text-green-400">Remote disponible</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center mb-20"
        >
          <Button variant="primary" size="lg" className="group">
            <Mail size={20} />
            <span>Contact</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </Button>
          
          <Button variant="secondary" size="lg" onClick={() => window.open('/java%20Abdeljabbar%20MOUDIRI%20CV%20fr.pdf', '_blank')}>
            <Download size={20} />
            Télécharger CV
          </Button>
          
          <div className="flex gap-3">
            <button 
              onClick={() => window.open('https://github.com/Abdelmoudiri', '_blank')}
              className="w-12 h-12 rounded-full glass glass-hover flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            >
              <Github size={20} />
            </button>
            <button 
              onClick={() => window.open('https://www.linkedin.com/in/abdeljabbar-moudiri/', '_blank')}
              className="w-12 h-12 rounded-full glass glass-hover flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </button>
          </div>
        </motion.div>

        {/* Tech Stack Preview */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap gap-3 justify-center text-sm text-slate-400"
        >
          {['Java', 'Spring Boot', 'Angular', 'React', 'Next.js', 'TypeScript', 'Docker', 'MongoDB'].map((tech) => (
            <span 
              key={tech}
              className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ 
            y: [0, 12, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-slate-500 uppercase tracking-wider">Scroll</span>
            <ChevronDown size={24} className="text-slate-400" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
