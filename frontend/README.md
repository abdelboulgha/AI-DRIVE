# AI-Drive - Application Android de Surveillance de Conduite

## Description

AI-Drive est une application Android intelligente qui utilise les capteurs intégrés du smartphone pour surveiller et analyser le comportement de conduite en temps réel. L'application détecte automatiquement les comportements de conduite dangereux et envoie des alertes pour améliorer la sécurité routière.

## Fonctionnalités Principales

### Authentification & Gestion Utilisateur
- Inscription et connexion sécurisées
- Gestion de session avec tokens JWT
- Association d'utilisateurs à des véhicules

### Collecte de Données de Capteurs
- **Accéléromètre** : Détection des mouvements et orientations du véhicule
- **Gyroscope** : Mesure des rotations et virages
- **GPS** : Localisation, vitesse et altitude en temps réel

### Détection d'Alertes Intelligente
- **Freinage brusque** : Détection de décélérations dangereuses
- **Accélération excessive** : Surveillance des accélérations anormales
- **Virages dangereux** : Analyse des rotations rapides
- **Vitesse excessive** : Monitoring de la vitesse en temps réel

### Gestion de Véhicules
- Sélection et gestion de véhicules multiples
- Association automatique des données aux véhicules actifs

## Technologies Utilisées

- **Android SDK** (Java)
- **Retrofit 2** - Communication API REST
- **Gson** - Sérialisation/désérialisation JSON
- **Capteurs Android** - Accéléromètre, Gyroscope, GPS
- **SharedPreferences** - Stockage local
- **Navigation Component** - Navigation entre fragments



## Installation et Configuration

### Prérequis
- Android Studio 4.0+
- SDK Android API 21+ (Android 5.0)
- Appareil Android avec capteurs (accéléromètre, gyroscope, GPS)

### Étapes d'Installation

1. **Cloner le projet**
   ```bash
   git clone https://github.com/KAOUTARKIKA/-AI-Drive.git
   cd AI-Drive
   ```

2. **Configurer l'API Backend**
   - Modifier l'URL du serveur dans `ApiClient.java`
   ```java
   private static final String BASE_URL = "http://VOTRE_IP:8080";
   ```

3. **Permissions requises**
   Vérifiez que ces permissions sont présentes dans `AndroidManifest.xml` :
   ```xml
   <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
   <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
   <uses-permission android:name="android.permission.INTERNET" />
   <uses-permission android:name="android.permission.WAKE_LOCK" />
   ```

4. **Compiler et installer**
   - Ouvrir le projet dans Android Studio
   - Synchroniser les dépendances Gradle
   - Compiler et installer sur l'appareil


## Utilisation

### Première Utilisation
1. **Inscription** : Créer un compte avec email, username, mot de passe
2. **Sélection véhicule** : Choisir un véhicule dans la liste disponible
3. **Permissions** : Autoriser l'accès aux capteurs et à la localisation

### Utilisation Quotidienne
1. **Connexion** : Se connecter avec vos identifiants
2. **Sélection véhicule** : L'application sélectionne automatiquement le dernier véhicule utilisé
3. **Conduite** : L'application surveille automatiquement en arrière-plan
4. **Alertes** : Réception de notifications en cas de conduite dangereuse

### Navigation dans l'App
- **Onglet Accéléromètre** : Visualisation en temps réel des données d'accélération
- **Onglet GPS** : Informations de localisation et vitesse
- **Onglet Gyroscope** : Données de rotation du véhicule


## Sécurité

- **Authentification JWT** : Tokens sécurisés pour l'API
- **Gestion des sessions** : Auto-déconnexion en cas de token expiré
- **Données chiffrées** : Communication HTTPS avec le backend
- **Permissions** : Demande explicite des permissions sensibles


### Problèmes Courants
1. **Erreur 401** : Token expiré → Reconnexion automatique
2. **Pas de données GPS** : Vérifier les permissions de localisation
3. **Capteurs indisponibles** : Vérifier la compatibilité de l'appareil



## Contributeurs
  **BOULGHA ABDELILLAH**

  **BOUBKARI KAOUTAR**


## Support

Pour toute question ou problème :
- Créer une issue sur GitHub
- Email : boulghaabdelillah@gmail.com

## Versions

### v1.0.0 (Actuelle)
- Collecte de données de capteurs en temps réel
- Détection d'alertes de conduite
- Authentification et gestion d'utilisateurs
- Interface utilisateur intuitive