import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export default function Card({ children, className = '', hover = true, glow = false }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={`
        glass rounded-2xl p-6 
        ${hover ? 'glass-hover cursor-pointer' : ''}
        ${glow ? 'hover:shadow-lg hover:shadow-cyber-blue/20' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}
