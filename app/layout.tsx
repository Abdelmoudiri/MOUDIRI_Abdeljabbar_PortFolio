import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abdeljabbar MOUDIRI | Full Stack Developer',
  description: 'Portfolio de Abdeljabbar MOUDIRI - Développeur Full Stack spécialisé en Java/Spring Boot, Angular et React. Building robust architectures & immersive web experiences.',
  keywords: ['Full Stack Developer', 'Java', 'Spring Boot', 'Angular', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Abdeljabbar MOUDIRI' }],
  openGraph: {
    title: 'Abdeljabbar MOUDIRI | Full Stack Developer',
    description: 'Building robust architectures & immersive web experiences',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script src="https://cdn.tailwindcss.com" suppressHydrationWarning></script>
        <script suppressHydrationWarning dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              darkMode: 'class',
              theme: {
                extend: {
                  colors: {
                    'cyber-blue': '#00d9ff',
                    'cyber-purple': '#b74dff',
                    'cyber-pink': '#ff3366',
                  }
                }
              }
            }
          `
        }} />
      </head>
      <body suppressHydrationWarning>
        <div className="relative min-h-screen">
          {/* Background gradient */}
          <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
