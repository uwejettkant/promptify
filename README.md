# Promptify 🎯

Eine moderne Web-Plattform zum Entdecken, Erstellen und Teilen von KI-Prompts mit der Community.

## ✨ Features

- 🔍 **Entdecken** - Durchsuche eine kuratierte Sammlung von KI-Prompts
- ✍️ **Erstellen** - Teile deine eigenen Prompts mit der Community
- 👤 **Profile** - Verwalte deine Prompts und sieh dir Profile anderer User an
- 🔐 **Authentifizierung** - Sicheres Login mit NextAuth.js
- 📱 **Responsive Design** - Optimiert für Desktop und Mobile

## 🛠️ Tech Stack

- **Framework:** Next.js 13 (App Router)
- **Styling:** TailwindCSS
- **Datenbank:** MongoDB mit Mongoose
- **Authentifizierung:** NextAuth.js
- **Sprache:** React, JavaScript

## 🚀 Installation

```bash
# Repository klonen
git clone https://github.com/yourusername/promptify.git

# Dependencies installieren
npm install

# .env Datei erstellen und konfigurieren
# Siehe .env.example für benötigte Variablen

# Development Server starten
npm run dev

Öffne http://localhost:3000 im Browser.

## 📝 Umgebungsvariablen

Erstelle eine `.env` Datei im Root-Verzeichnis:

```env
MONGODB_URI=deine_mongodb_connection_string
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=dein_secret
GOOGLE_ID=deine_google_client_id
GOOGLE_SECRET=dein_google_client_secret
```

