import { Project } from '@/types'

const FEATURED_PROJECTS = ['Tricol-V2', 'Smart-Irrigation-SaaS', 'tricol', 'smart-irrigation']

export async function fetchGitHubRepos(username: string = 'Abdelmoudiri'): Promise<Project[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repos')
    }

    const repos: Project[] = await response.json()

    // Mark featured projects
    const processedRepos = repos.map(repo => ({
      ...repo,
      isFeatured: FEATURED_PROJECTS.some(featured => 
        repo.name.toLowerCase().includes(featured.toLowerCase())
      )
    }))

    // Sort: Featured first, then by stars
    return processedRepos.sort((a, b) => {
      if (a.isFeatured && !b.isFeatured) return -1
      if (!a.isFeatured && b.isFeatured) return 1
      return b.stargazers_count - a.stargazers_count
    })

  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    return getFallbackProjects()
  }
}

// Fallback projects if API fails
export function getFallbackProjects(): Project[] {
  return [
    {
      id: 1,
      name: 'Tricol V2',
      description: 'ERP Gestion de Stock - Spring Boot 3, Java 17, Docker, Liquibase. Traçabilité complète, calcul CUMP, architecture modulaire testée.',
      html_url: '#',
      stargazers_count: 0,
      language: 'Java',
      topics: ['spring-boot', 'erp', 'docker', 'liquibase'],
      isFeatured: true,
    },
    {
      id: 2,
      name: 'Smart Irrigation SaaS',
      description: 'Plateforme AgriTech IoT - Spring Boot 3, Angular 18, MongoDB, Microservices. Dashboard temps réel, JWT, Cloud.',
      html_url: '#',
      stargazers_count: 0,
      language: 'TypeScript',
      topics: ['angular', 'iot', 'microservices', 'mongodb'],
      isFeatured: true,
    },
  ]
}
