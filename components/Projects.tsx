'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, GitFork, Eye } from 'lucide-react'
import Card from './ui/Card'
import Button from './ui/Button'
import { Project } from '@/types'
import { fetchGitHubRepos } from '@/lib/github'

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<string>('all')

  useEffect(() => {
    async function loadProjects() {
      try {
        const repos = await fetchGitHubRepos()
        setProjects(repos.slice(0, 6))
      } catch (error) {
        console.error('Failed to load projects:', error)
      } finally {
        setLoading(false)
      }
    }
    loadProjects()
  }, [])

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.language?.toLowerCase() === filter.toLowerCase())

  const languages = Array.from(new Set(projects.map(p => p.language).filter(Boolean)))

  return (
    <section className="py-32 px-4 relative" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projets
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Mes réalisations techniques et contributions open source
          </p>
        </motion.div>

        {/* Filter Buttons */}
        {!loading && languages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'glass glass-hover text-slate-300'
              }`}
            >
              Tous
            </button>
            {languages.slice(0, 5).map((lang) => (
              <button
                key={lang}
                onClick={() => setFilter(lang as string)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                  filter === lang
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'glass glass-hover text-slate-300'
                }`}
              >
                {lang}
              </button>
            ))}
          </motion.div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass rounded-2xl p-6 animate-pulse">
                <div className="h-6 bg-slate-700 rounded mb-4 w-3/4" />
                <div className="h-4 bg-slate-700 rounded mb-2" />
                <div className="h-4 bg-slate-700 rounded w-5/6 mb-4" />
                <div className="flex gap-2">
                  <div className="h-8 bg-slate-700 rounded w-20" />
                  <div className="h-8 bg-slate-700 rounded w-20" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card glow className="h-full flex flex-col group relative overflow-hidden">
                  {/* Featured Ribbon */}
                  {project.isFeatured && (
                    <div className="absolute top-0 right-0 z-10">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 text-xs font-bold transform rotate-45 translate-x-8 translate-y-2 shadow-lg">
                        FEATURED
                      </div>
                    </div>
                  )}

                  {/* Project Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-colors">
                        <Github size={24} className="text-cyan-400" />
                      </div>
                      <div className="flex items-center gap-3 text-slate-400 text-sm">
                        <div className="flex items-center gap-1">
                          <Star size={16} className="text-yellow-500" />
                          <span>{project.stargazers_count}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                    {project.description || 'Aucune description disponible'}
                  </p>

                  {/* Topics/Tags */}
                  {project.topics && project.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="px-2.5 py-1 rounded-lg bg-slate-800/50 text-slate-300 text-xs font-medium border border-slate-700/50"
                        >
                          #{topic}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    {/* Language */}
                    {project.language && (
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-cyan-400" />
                        <span className="text-sm text-slate-400">{project.language}</span>
                      </div>
                    )}

                    {/* Links */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => window.open(project.html_url, '_blank')}
                        className="p-2 rounded-lg glass-hover text-slate-300 hover:text-white transition-colors"
                        title="Voir le code"
                      >
                        <Github size={18} />
                      </button>
                      {project.homepage && (
                        <button
                          onClick={() => window.open(project.homepage, '_blank')}
                          className="p-2 rounded-lg glass-hover text-slate-300 hover:text-cyan-400 transition-colors"
                          title="Voir la démo"
                        >
                          <ExternalLink size={18} />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* View More Button */}
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.open('https://github.com/Abdelmoudiri', '_blank')}
              className="group"
            >
              <Github size={20} />
              <span>Voir tous mes projets</span>
              <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
