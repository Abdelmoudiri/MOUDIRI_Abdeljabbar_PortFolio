export interface Project {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  language: string
  topics?: string[]
  homepage?: string
  isFeatured?: boolean
}

export interface Experience {
  id: number
  company: string
  role: string
  period: string
  location: string
  description: string[]
  technologies: string[]
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'devops' | 'tools'
  level: number
}

export interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}
