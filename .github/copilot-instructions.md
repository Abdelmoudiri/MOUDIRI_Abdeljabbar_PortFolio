# Portfolio Abdeljabbar MOUDIRI - AI Coding Agent Instructions

## Project Overview
Portfolio personnel ultra-moderne "High-End" pour Abdeljabbar MOUDIRI, Développeur Full Stack (Java/Spring Boot/Angular/React).
**Objectif**: Créer un "Wow effect" instantané pour impressionner recruteurs techniques et RH.

## Tech Stack
- **Framework**: Next.js 14+ (App Router) - Performance et rendu dynamique
- **Styling**: Tailwind CSS - Design responsive avec custom tokens
- **Animations**: Framer Motion - **CRUCIAL** pour le "Wow effect"
- **Icons**: Lucide React
- **Data Source**: GitHub API dynamique pour les projets

## Architecture & Structure
```
portfolio/
├── app/                       # Next.js App Router
│   ├── layout.tsx            # Layout principal avec dark mode
│   ├── page.tsx              # Page d'accueil (composition des sections)
│   └── globals.css           # Styles globaux + custom animations
├── components/
│   ├── Hero.tsx              # Section hero avec catchphrase animée
│   ├── About.tsx             # Bento Grid avec glassmorphism
│   ├── Experience.tsx        # Timeline des expériences
│   ├── Projects.tsx          # Projets avec GitHub API fetch
│   ├── AIChatBot.tsx         # FAB + Chat UI (prêt pour Gemini API)
│   └── ui/                   # Composants réutilisables
│       ├── Button.tsx        # Boutons avec animations
│       ├── Card.tsx          # Cards avec glassmorphism + glow effect
│       └── CustomCursor.tsx  # Curseur personnalisé
├── lib/
│   └── github.ts             # Fonctions async pour GitHub API
└── types/
    └── index.ts              # Types TypeScript (Project, Experience, etc.)
```

## Content & Data (CV Réel)
**Profil**: Abdeljabbar MOUDIRI, Développeur Web Full Stack, Safi, Maroc  
**Hero Catchphrase**: "Building robust architectures & immersive web experiences."

**Expériences Clés**:
- PROXISOFT SARL (2025): Dév Full Stack - ERP/SRM Web (Symfony, AJAX/jQuery)
- Commune d'Ayir (2020): App Desktop C# - Gestion citoyenne

**Projets Stars** (À mettre en avant):
1. **Tricol V2**: ERP Gestion de Stock (Spring Boot 3, Java 17, Docker, Liquibase)
2. **Smart Irrigation SaaS**: Plateforme AgriTech IoT (Spring Boot 3, Angular 18, MongoDB, Microservices)

**Formation**: YouCode (UM6P) - École d'excellence

## Development Workflow

### Installation
```bash
# Installer Node.js d'abord si nécessaire
npm install
npm run dev        # Démarrer en mode développement (http://localhost:3000)
npm run build      # Build de production
npm run start      # Démarrer le serveur de production
```

### GitHub API Integration
```typescript
// Fetch repos depuis: https://api.github.com/users/Abdelmoudiri/repos
// Filtrage intelligent: Prioriser "Tricol V2" et "Smart Irrigation"
// Afficher: Nom, Description, Stars, Langage principal
```

## Code Conventions & Patterns

### Design System
- **Dark Mode**: Activé par défaut avec `class="dark"`
- **Colors**: Cyber theme (Bleu électrique `#00d9ff`, Violet `#b74dff`)
- **Glassmorphism**: `backdrop-blur-lg bg-white/10 border border-white/20`
- **Bento Grid**: Layout modulaire asymétrique pour section About/Skills

### Animations (Framer Motion)
- **Reveal on Scroll**: `fadeInUp` variant - Apparition progressive des éléments
- **Smooth Scroll**: Comportement fluide entre sections
- **Glow Effects**: Hover sur cartes avec ombre lumineuse animée
- **Stagger Children**: Animations séquencées pour listes/grilles

### Component Patterns
```tsx
// Toujours wrapper les animations avec motion
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

<motion.div {...fadeInUp}>Content</motion.div>
```

### AI ChatBot Component
- **FAB**: Floating Action Button (bas à droite, z-index élevé)
- **Chat UI**: Style Gemini/ChatGPT avec glassmorphism
- **Structure**: Input field + Message list (prêt pour API Gemini)
- **État**: `isOpen` toggle, messages array pour futur state management

## Critical Features

### UX "Wow" Essentials
1. **Smooth Scroll**: `html { scroll-behavior: smooth; }`
2. **Intersection Observer**: Trigger animations au scroll
3. **Custom Cursor**: Effet glow qui suit la souris (optionnel desktop)
4. **Micro-interactions**: Hover states sur tous les éléments interactifs

### GitHub Projects Display
- Fetch asynchrone dans `useEffect` ou Server Component
- Tri: Featured projects (Tricol V2, Smart Irrigation) en premier
- Fallback si API rate limit: Afficher projets hardcodés
- Loading states avec skeleton UI

## Key Files to Understand
- `tailwind.config.ts`: Custom animations, colors cyber, keyframes
- `app/globals.css`: Smooth scroll, custom scrollbar, base styles
- `components/Projects.tsx`: Logique de fetch + filtrage GitHub API
- `components/AIChatBot.tsx`: Structure UI prête pour intégration Gemini

## Deployment
- **Platform recommandée**: Vercel (optimisé pour Next.js)
- **Env variables** (futur): `GEMINI_API_KEY` pour le chatbot
- **Images**: Configurer `next.config.js` pour GitHub domains

---
*Créé: November 25, 2025*  
*Ce portfolio suit les best practices Awwwards pour un design "High-End" moderne.*
