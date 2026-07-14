# 🔒 Enigma Lock

Un jeu de logique basé sur le principe d'un cadenas numérique.

Le joueur doit trouver le code secret grâce à une série d'indices logiques.  
Le moteur du jeu est indépendant de l'interface et pourra fonctionner sur plusieurs plateformes :

- 🌐 Web (React)
- 📱 Mobile (React Native / Expo) (features)
- 💻 CLI (Node.js)

---

## ✨ Fonctionnalités actuelles

- Génération de codes secrets
- Système d'indices
- Validation des solutions
- Gestion des parties
- Gestion des tentatives
- Mode CLI jouable

## 🚧 À venir

- Interface React
- Application mobile Expo
- Système de difficulté intelligent (`DifficultyEngine`)
- Score et statistiques
- Animations de cadenas
- Sauvegarde des parties

---

# 📋 Prérequis

Avant de commencer, installer :

### Node.js

Version recommandée :
Node >= 20

Vérifier :

```bash
node -v
```
---

##  📥 Installation

Cloner le projet :

```bash
git clone <repository-url>

cd Enigma
```

Installer les dépendances :

#### pnpm :
```bash
pnpm install
```

#### npm :
```bash
npm install
```

---

## 🚀 Lancement du projet
Vous pouver jouer le jeux sur terminal (CLI) ou avec l'interface en React

### Lancement dans le CLI
La version terminal permet de tester le moteur du jeu.

#### Lancer:
pour  **pnpm**:
```bash
pnpm cli
```

pour **npm**:
```bash
npm run cli
```
### Exemple :
``` bash
🔒 ENIGMA LOCK


Choisir une difficulté

1 - Facile
2 - Normal
3 - Difficile


🔎 Indices :

Code : 682

Bien placé : 0

Mal placé : 1


Votre code :
>
```
---
### Pour l'application Web 
Lance react
#### pnpm 
```bash
pnpm dev
```

#### npm 
```bash
npm run dev
```

Puis ovrir : 
```bash
http://localhost:5173
```

---

## 🛠️ Technologies utilisées
### Core
- TypeScript
- Vitest
### Web
- React
- Vite
- TypeScript

### CLI
- Node.js
- tsx

---

*Projet personnel de développement autour de la création d'un moteur de jeu logique multiplateforme.*