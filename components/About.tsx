'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Cloud, Boxes, GraduationCap, Award, Users, Zap } from 'lucide-react'
import Card from './ui/Card'
import { useEffect, useState } from 'react'

export default function About() {
  const [counts, setCounts] = useState({ months: 0, projects: 0, technologies: 0 })

  useEffect(() => {
    const targets = { months: 3, projects: 25, technologies: 25 }
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let current = { months: 0, projects: 0, technologies: 0 }
    const timer = setInterval(() => {
      current = {
        months: Math.min(current.months + targets.months / steps, targets.months),
        projects: Math.min(current.projects + targets.projects / steps, targets.projects),
        technologies: Math.min(current.technologies + targets.technologies / steps, targets.technologies)
      }
      setCounts({
        months: Math.floor(current.months),
        projects: Math.floor(current.projects),
        technologies: Math.floor(current.technologies)
      })
      if (current.months >= targets.months) clearInterval(timer)
    }, interval)
    return () => clearInterval(timer)
  }, [])

  const skills = {
    frontend: [
      { name: 'Angular', level: 90 },
      { name: 'React / Next.js', level: 85 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 90 }
    ],
    backend: [
      { name: 'Java / Spring Boot', level: 92 },
      { name: 'Node.js', level: 80 },
      { name: 'PHP', level: 85 },
      { name: 'Symfony', level: 80 },
      { name: 'Laravel', level: 80 },
      { name: 'C', level: 75 },
      { name: 'REST / GraphQL APIs', level: 88 }
    ],
    database: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 82 },
      { name: 'MySQL', level: 88 }
    ],
    devops: [
      { name: 'Docker', level: 85 },
      { name: 'Git / CI/CD', level: 88 },
      { name: 'Linux', level: 80 },
      { name: 'Cloud (AWS/Azure)', level: 75 }
    ]
  }

  return (
    <section className="py-32 px-4 relative" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              À Propos
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Développeur Full Stack passionné par la création d&apos;applications web performantes et évolutives. 
            Spécialisé dans les architectures robustes et les expériences utilisateur immersives.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="glass rounded-2xl p-8 text-center border-l-4 border-cyan-400 hover:border-cyan-300 transition-colors">
            <div className="text-5xl font-black text-cyan-400 mb-2">{counts.months}+</div>
            <div className="text-slate-400">Mois d&apos;expérience professionnelle</div>
          </div>
          <div className="glass rounded-2xl p-8 text-center border-l-4 border-blue-400 hover:border-blue-300 transition-colors">
            <div className="text-5xl font-black text-blue-400 mb-2">{counts.projects}+</div>
            <div className="text-slate-400">Projets réalisés</div>
          </div>
          <div className="glass rounded-2xl p-8 text-center border-l-4 border-purple-400 hover:border-purple-300 transition-colors">
            <div className="text-5xl font-black text-purple-400 mb-2">{counts.technologies}+</div>
            <div className="text-slate-400">Technologies maîtrisées</div>
          </div>
        </motion.div>

        {/* Formation & Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* Formation */}
          <Card glow className="row-span-2">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                <GraduationCap size={32} className="text-cyan-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Formation</h3>
                <p className="text-cyan-400 font-semibold text-lg">YouCode (UM6P) <span className="text-slate-400 text-base font-normal">2024 – 2026</span></p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              Formation de YouCode, l&apos;école d&apos;excellence de l&apos;Université Mohammed VI Polytechnique. 
              Formation intensive en développement Full Stack avec focus sur les bonnes pratiques 
              et les technologies modernes.
              <br />
              <span className="block mt-4 font-semibold text-cyan-300">À propos de YouCode</span>
              <span className="block text-slate-300">
                YouCode est une école inclusive et innovante, accessible à tous sans barrière de diplôme ou de niveau. Fondée par le groupe OCP, en partenariat avec Simplon.co et l'Université Mohammed VI Polytechnique (UM6P), YouCode propose une formation 100% gratuite, intensive et axée sur la pratique, avec une pédagogie basée sur les projets et les technologies les plus demandées du marché. L'objectif est de mettre le code entre toutes les mains, réduire les inégalités numériques et révéler les talents. Les apprenants évoluent dans un environnement moderne, collaboratif et bienveillant, propice à l'apprentissage et à la réussite professionnelle.
              </span>
              <span className="block mt-4 font-semibold text-cyan-300">ISTA NTIC Safi (2018 – 2020)</span>
              <span className="block text-slate-300">Technicien Spécialisé en Développement Informatique</span>
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300">
                <Award size={18} className="text-cyan-400" />
                <span>Certification développement Full Stack</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Users size={18} className="text-cyan-400" />
                <span>Méthodologies Agile & Scrum</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Zap size={18} className="text-cyan-400" />
                <span>Architecture logicielle & Design Patterns</span>
              </div>
            </div>
          </Card>

          {/* Quick Facts */}
          <Card hover={false} className="bg-gradient-to-br from-cyan-500/5 to-blue-500/5">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Code2 className="text-cyan-400" size={24} />
              Spécialités
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▹</span>
                <span>Applications d&apos;entreprise (ERP, SaaS)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▹</span>
                <span>Architecture microservices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▹</span>
                <span>API RESTful & GraphQL</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▹</span>
                <span>Interfaces utilisateur modernes</span>
              </li>
            </ul>
          </Card>

          <Card hover={false} className="bg-gradient-to-br from-purple-500/5 to-pink-500/5">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Boxes className="text-purple-400" size={24} />
              Approche
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Code propre, architectures scalables, et expérience utilisateur optimale. 
              Passionné par l&apos;apprentissage continu et les nouvelles technologies.
            </p>
          </Card>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Frontend */}
          <Card hover={false}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-cyan-500/10">
                <Code2 className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Frontend</h3>
            </div>
            <div className="space-y-4">
              {skills.frontend.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Backend */}
          <Card hover={false}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-blue-500/10">
                <Database className="text-blue-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Backend</h3>
            </div>
            <div className="space-y-4">
              {skills.backend.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-blue-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Database */}
          <Card hover={false}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-purple-500/10">
                <Database className="text-purple-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Database</h3>
            </div>
            <div className="space-y-4">
              {skills.database.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-purple-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* DevOps */}
          <Card hover={false}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-pink-500/10">
                <Cloud className="text-pink-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold">DevOps & Cloud</h3>
            </div>
            <div className="space-y-4">
              {skills.devops.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-pink-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-pink-400 to-red-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
