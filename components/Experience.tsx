'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, TrendingUp, Code } from 'lucide-react'
import Card from './ui/Card'
import { Experience as ExperienceType } from '@/types'

const experiences: ExperienceType[] = [
  {
    id: 1,
    company: 'PROXISOFT SARL',
    role: 'Développeur Full Stack',
    period: '2025',
    location: 'Maroc',
    description: [
      'Développement d\'un ERP/SRM Web complet de gestion d\'entreprise',
      'Analyse des besoins métier et conception de l\'architecture technique',
      'Implémentation des modules de gestion avec tests unitaires',
      'Mise en production et formation des équipes'
    ],
    technologies: ['PHP/Symfony', 'AJAX', 'jQuery', 'MySQL', 'Git']
  },
  {
    id: 2,
    company: 'Commune d\'Ayir',
    role: 'Développeur Desktop',
    period: '2020',
    location: 'Ayir, Maroc',
    description: [
      'Développement d\'une application desktop de gestion citoyenne',
      'Conception et design de l\'interface utilisateur moderne',
      'Implémentation des fonctionnalités CRUD et reporting',
      'Formation et support des utilisateurs finaux'
    ],
    technologies: ['C#', '.NET', 'WinForms', 'SQL Server']
  }
]

export default function Experience() {
  return (
    <section className="py-32 px-4 relative" id="experience">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Expérience
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Mon parcours professionnel dans le développement d&apos;applications
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent hidden md:block rounded-full" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 top-8 w-5 h-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 border-4 border-slate-950 -translate-x-1/2 hidden md:block z-10 shadow-lg shadow-cyan-500/50" />

                <Card className="md:ml-20 hover:scale-[1.02] transition-transform" glow>
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 self-start">
                      <Briefcase size={28} className="text-cyan-400" />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between mb-6">
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{exp.role}</h3>
                          <p className="text-xl text-cyan-400 font-semibold flex items-center gap-2">
                            <Code size={18} />
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-2 text-slate-400">
                          <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1.5 rounded-lg">
                            <Calendar size={16} className="text-cyan-400" />
                            <span className="font-medium">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-cyan-400" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                            <span className="text-cyan-400 mt-1 text-lg">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-slate-800 to-slate-700 text-cyan-400 text-sm font-medium border border-slate-600 hover:border-cyan-500/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
