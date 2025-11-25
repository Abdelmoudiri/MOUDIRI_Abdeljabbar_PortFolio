import { NextRequest, NextResponse } from 'next/server'

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY

// Context about Abdeljabbar MOUDIRI
const PORTFOLIO_CONTEXT = `
Tu es l'assistant AI d'Abdeljabbar MOUDIRI, développeur Full Stack.

PROFIL:
- Nom: Abdeljabbar MOUDIRI
- Profession: Développeur Web Full Stack
- Localisation: Safi, Maroc
- Disponible en remote

CONTACT:
- Email: abdeljabbarmoudiri17@gmail.com
- Téléphone: +212 677 713 460
- GitHub: https://github.com/Abdelmoudiri
- LinkedIn: https://www.linkedin.com/in/abdeljabbar-moudiri/

FORMATION:
- YouCode (UM6P) - École d'excellence en développement web
- Formation intensive Full Stack avec focus sur les bonnes pratiques

COMPÉTENCES:
Frontend: Angular (90%), React/Next.js (85%), TypeScript (88%), Tailwind CSS (90%)
Backend: Java/Spring Boot (92%), Node.js (80%), PHP/Symfony (85%), REST/GraphQL APIs (88%)
Database: PostgreSQL (85%), MongoDB (82%), MySQL (88%)
DevOps: Docker (85%), Git/CI/CD (88%), Linux (80%), Cloud AWS/Azure (75%)

EXPÉRIENCES:
1. PROXISOFT SARL (2025) - Développeur Full Stack
   - Développement d'un ERP/SRM Web complet
   - Stack: PHP/Symfony, AJAX, jQuery, MySQL, Git
   
2. Commune d'Ayir (2020) - Développeur Desktop
   - Application desktop de gestion citoyenne
   - Stack: C#, .NET, WinForms, SQL Server

PROJETS PHARES:
1. Tricol V2 - ERP Gestion de Stock
   - Stack: Spring Boot 3, Java 17, Docker, Liquibase
   - Focus: Traçabilité, Calcul CUMP, Architecture modulaire

2. Smart Irrigation SaaS - Plateforme AgriTech IoT
   - Stack: Spring Boot 3, Angular 18, MongoDB, Microservices
   - Focus: Dashboard temps réel, JWT, Cloud

SPÉCIALITÉS:
- Applications d'entreprise (ERP, SaaS)
- Architecture microservices
- API RESTful & GraphQL
- Interfaces utilisateur modernes

INSTRUCTIONS:
Réponds de manière professionnelle, concise et amicale. Tu dois aider les visiteurs à en savoir plus sur Abdeljabbar, ses compétences et son expérience.

IMPORTANT - PARTAGE DES COORDONNÉES:
- Si on te demande ses coordonnées (email, téléphone, contact), partage-les DIRECTEMENT et SANS restriction
- Email: abdeljabbarmoudiri17@gmail.com
- Téléphone: +212 677 713 460
- GitHub: https://github.com/Abdelmoudiri
- LinkedIn: https://www.linkedin.com/in/abdeljabbar-moudiri/
- Encourage fortement les visiteurs à le contacter pour discuter d'opportunités professionnelles
`

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!GEMINI_API_KEY || GEMINI_API_KEY === 'votre_clé_api_ici') {
      return NextResponse.json(
        { 
          response: "🔑 L'API Gemini n'est pas encore configurée. Pour l'activer, obtenez une clé gratuite sur https://aistudio.google.com/app/apikey et ajoutez-la dans le fichier .env.local" 
        },
        { status: 200 }
      )
    }

    // Call Gemini API (using gemini-2.5-flash - latest stable version)
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `${PORTFOLIO_CONTEXT}\n\nQuestion du visiteur: ${message}\n\nRéponds en français de manière professionnelle et concise (maximum 3-4 phrases).`
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 500,
          topP: 0.8,
          topK: 40
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('Gemini API error:', errorData)
      throw new Error(`API error: ${response.status}`)
    }

    const data = await response.json()
    
    // Log pour debug
    console.log('Gemini API response:', JSON.stringify(data, null, 2))
    
    if (!data.candidates || data.candidates.length === 0) {
      return NextResponse.json({ 
        response: "Désolé, je n'ai pas pu générer une réponse appropriée. Pouvez-vous reformuler votre question ?" 
      })
    }

    const candidate = data.candidates[0]
    const aiResponse = candidate?.content?.parts?.[0]?.text || 
      "Désolé, je n'ai pas pu générer une réponse."

    return NextResponse.json({ response: aiResponse })

  } catch (error: any) {
    console.error('Error in chat API:', error)
    return NextResponse.json(
      { 
        response: `Une erreur s'est produite lors de l'appel à l'API. Vérifiez que votre clé API Gemini est valide et que vous avez activé l'API Gemini dans Google Cloud Console.` 
      },
      { status: 200 }
    )
  }
}
