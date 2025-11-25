# 🚀 Guide d'Installation Rapide

## Étape 1: Installer Node.js et npm

```bash
# Mettre à jour les paquets Ubuntu
sudo apt update

# Installer Node.js et npm
sudo apt install nodejs npm

# Vérifier l'installation
node --version  # Devrait afficher v20+ ou similaire
npm --version   # Devrait afficher 10+ ou similaire
```

## Étape 2: Installer les dépendances du projet

```bash
# Naviguer vers le dossier du projet
cd /home/moudiri/Documents/portfolio/portfolio

# Installer toutes les dépendances
npm install
```

Cette commande va installer :
- Next.js 14+
- React 18+
- Framer Motion (animations)
- Lucide React (icônes)
- Tailwind CSS
- TypeScript

## Étape 3: Lancer le projet en développement

```bash
npm run dev
```

Ouvrir votre navigateur sur: **http://localhost:3000**

## 🎨 Fonctionnalités Implémentées

✅ **Hero Section** - Catchphrase animée + CTA  
✅ **About Section** - Bento Grid avec glassmorphism  
✅ **Experience Section** - Timeline animée  
✅ **Projects Section** - Fetch dynamique GitHub API  
✅ **AI ChatBot** - FAB + UI prête pour Gemini API  
✅ **Dark Mode** - Design cyber avec gradients  
✅ **Animations** - Framer Motion (reveal on scroll)  
✅ **Responsive** - Mobile-first design  

## 📝 Prochaines Étapes (Optionnel)

### Connecter l'API Gemini au Chatbot
1. Créer un compte Google AI Studio
2. Obtenir une clé API Gemini
3. Créer un fichier `.env.local` :
```
NEXT_PUBLIC_GEMINI_API_KEY=votre_clé_ici
```
4. Modifier `components/AIChatBot.tsx` pour intégrer l'API

### Personnaliser
- Ajouter vos liens GitHub/LinkedIn dans `components/Hero.tsx`
- Modifier les projets featured dans `lib/github.ts`
- Ajouter votre photo dans `public/` et l'intégrer

### Déployer sur Vercel
```bash
npm run build
# Puis connecter le repo GitHub à Vercel
```

## 🐛 Dépannage

**Erreur "Cannot find module 'next'"**
→ Relancer `npm install`

**Port 3000 déjà utilisé**
→ Utiliser `npm run dev -- -p 3001`

**API GitHub rate limit**
→ Les projets fallback s'afficheront automatiquement
