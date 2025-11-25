# 📁 Structure du Projet

```
portfolio/
│
├── 📱 app/                          # Next.js App Router
│   ├── layout.tsx                   # Layout principal (dark mode, fonts)
│   ├── page.tsx                     # Page d'accueil (composition)
│   └── globals.css                  # Styles globaux + animations
│
├── 🎨 components/                   # Composants React
│   ├── Hero.tsx                     # ✨ Section hero avec animations
│   ├── About.tsx                    # 🎯 Bento Grid + Skills
│   ├── Experience.tsx               # 💼 Timeline des expériences
│   ├── Projects.tsx                 # 🚀 Projets GitHub API
│   ├── AIChatBot.tsx               # 🤖 Chatbot flottant (Gemini ready)
│   └── ui/                          # Composants réutilisables
│       ├── Button.tsx               # Boutons avec animations
│       └── Card.tsx                 # Cards glassmorphism
│
├── 📚 lib/                          # Utilitaires
│   └── github.ts                    # Fonctions GitHub API
│
├── 🔧 types/                        # TypeScript
│   └── index.ts                     # Interfaces (Project, Experience, etc.)
│
├── ⚙️ Configuration
│   ├── package.json                 # Dépendances npm
│   ├── tsconfig.json                # Config TypeScript
│   ├── tailwind.config.ts           # Config Tailwind (colors, animations)
│   ├── next.config.js               # Config Next.js
│   ├── postcss.config.js            # Config PostCSS
│   └── .eslintrc.json               # Config ESLint
│
├── 📖 Documentation
│   ├── README.md                    # Guide principal
│   ├── INSTALLATION.md              # Guide d'installation détaillé
│   └── .github/
│       └── copilot-instructions.md  # Instructions pour AI agents
│
└── 🚫 .gitignore                    # Fichiers ignorés par Git
```

## 📊 Statistiques

- **19 fichiers créés**
- **7 composants React**
- **5 sections principales**
- **100% TypeScript**
- **0 dépendances externes** (hors framework)

## 🎯 Composants Clés

### Hero.tsx
- Animation stagger
- Gradient text
- Floating badges
- Smooth scroll indicator

### About.tsx
- Bento Grid layout
- Glassmorphism cards
- Skills categorization
- Reveal on scroll

### Experience.tsx
- Vertical timeline
- Animated dots
- Tech tags
- Responsive design

### Projects.tsx
- GitHub API integration
- Featured projects filter
- Loading skeletons
- Star count display

### AIChatBot.tsx
- Floating Action Button
- Chat UI (Gemini-ready)
- Smooth animations
- Message history

## 🚀 Technologies

| Catégorie | Tech |
|-----------|------|
| Framework | Next.js 14+ |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| API | GitHub REST API |
