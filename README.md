# PFL2 - Programme Fitness & Nutrition

Une application web progressive (PWA) pour la perte de poids avec un programme d'entraînement personnalisé et un plan nutritionnel.

## 🎯 Objectif

- **Perte de poids**: 4 kg par mois
- **Poids actuel**: 140 kg
- **Équipement disponible**: 
  - Barre de 30 kg
  - Haltères: 2 × 15 kg, 2 × 10 kg, 2 × 5 kg
  - Vélo stationnaire
  - Marche (1h le weekend)

## 🏋️ Fonctionnalités

### Entraînement
- Programme hebdomadaire complet (7 jours)
- Séances de 30 minutes à 1 heure
- Compteur d'exercices (1/12, 2/12, etc.)
- Pause configurable entre les exercices (par défaut 5 secondes)
- Mode automatique pour enchaîner les exercices
- Chronomètre intégré

### Nutrition
- Plan nutritionnel quotidien
- 1 repas principal par jour riche en protéines
- Utilisation des ingrédients disponibles:
  - Œufs
  - Poulet
  - Poisson
  - Whey
  - Pain

## 📱 Installation PWA

1. Ouvrir le site dans un navigateur mobile
2. Appuyer sur "Ajouter à l'écran d'accueil"
3. L'application fonctionnera hors ligne

## 🚀 Utilisation

1. **Onglet Entraînement**: Sélectionner le jour et démarrer la séance
2. **Onglet Programme**: Voir le programme hebdomadaire complet
3. **Onglet Nutrition**: Consulter le plan nutritionnel quotidien
4. **Onglet Réglages**: Personnaliser les paramètres

### Raccourcis clavier
- `Espace`: Démarrer/Arrêter l'entraînement
- `P`: Pause/Reprendre
- `→`: Exercice suivant
- `←`: Exercice précédent

## 📂 Structure du projet

```
PFL2/
├── index.html      # Page principale
├── styles.css      # Styles CSS
├── app.js          # Logique JavaScript
├── manifest.json   # Manifest PWA
├── sw.js           # Service Worker
└── icons/          # Icônes PWA
```

## 🔧 Développement

Pour lancer le projet en local:

```bash
# Avec Python
python -m http.server 8000

# Avec Node.js
npx serve .
```

Puis ouvrir `http://localhost:8000` dans le navigateur.

## 📄 Licence

Ce projet est open source.
