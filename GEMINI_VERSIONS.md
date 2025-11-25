# Versions de l'API Gemini disponibles

## 1. gemini-pro (Basique - Gratuit)
URL: https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent

## 2. gemini-1.5-pro (Recommandé - Gratuit)
URL: https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent

## 3. gemini-1.5-flash (Rapide - Gratuit)
URL: https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent

## 4. gemini-1.0-pro (Ancienne - Gratuit)
URL: https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent

## 5. gemini-pro-vision (Avec images)
URL: https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent

## 6. gemini-1.5-pro-latest (Dernière version)
URL: https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent

## 7. gemini-1.5-flash-latest (Flash dernière version)
URL: https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent

---

TESTEZ CES VERSIONS :
Pour tester, lancez cette commande avec votre clé API :

```bash
# Test gemini-pro
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=VOTRE_CLE" \
  -H 'Content-Type: application/json' \
  -d '{"contents":[{"parts":[{"text":"Bonjour"}]}]}'

# Test gemini-1.5-pro
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=VOTRE_CLE" \
  -H 'Content-Type: application/json' \
  -d '{"contents":[{"parts":[{"text":"Bonjour"}]}]}'

# Test gemini-1.5-flash
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=VOTRE_CLE" \
  -H 'Content-Type: application/json' \
  -d '{"contents":[{"parts":[{"text":"Bonjour"}]}]}'
```

Remplacez VOTRE_CLE par votre clé API.

RECOMMANDATION :
- gemini-1.5-flash : Le plus rapide et gratuit (MEILLEUR CHOIX)
- gemini-1.5-pro : Plus intelligent mais un peu plus lent
