![AI-DRIVE Logo](./assets/AI_DRIVE.png)

# Application Android de Surveillance de Conduite

[![Android](https://img.shields.io/badge/Platform-Android-green.svg)](https://android.com)
[![API Level](https://img.shields.io/badge/API-21%2B-brightgreen.svg)](https://android-arsenal.com/api?level=21)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/Version-1.0.0-orange.svg)](https://github.com/abdelboulgha/AI-DRIVE/releases)

> AI-Drive est une application Android intelligente qui utilise les capteurs intégrés du smartphone pour surveiller et analyser le comportement de conduite en temps réel.

## Table des Matières

- [Description](#description)
- [Fonctionnalités](#fonctionnalités)
- [Technologies](#technologies)
- [Captures d'écran](#captures-décran)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Architecture](#️-architecture)
- [Sécurité](#sécurité)
- [Roadmap](#️-roadmap)
- [Contribution](#-contribution)
- [Équipe](#-équipe)

## Description

AI-Drive est une application Android intelligente qui utilise les capteurs intégrés du smartphone pour surveiller et analyser le comportement de conduite en temps réel. L'application détecte automatiquement les comportements de conduite dangereux et envoie des alertes pour améliorer la sécurité routière.

### Pourquoi AI-Drive ?

- **Sécurité renforcée** : Détection proactive des comportements à risque
- **Analyse en temps réel** : Monitoring continu via capteurs smartphone
- **Alertes intelligentes** : Notifications personnalisées et contextuelles
- **Simplicité d'usage** : Interface intuitive et installation facile


## Fonctionnalités

###  Authentification & Gestion Utilisateur
- Inscription et connexion sécurisées
- Authentification JWT avec gestion de session
- Association multi-utilisateurs/véhicules

###  Collecte de Données Avancée
| Capteur | Fonction | Utilisation |
|---------|----------|-------------|
| **Accéléromètre** | Mouvements et orientations | Détection freinages/accélérations |
| **Gyroscope** | Rotations et virages | Analyse stabilité et virages |
| **GPS** | Localisation précise | Vitesse, altitude, géofencing |

### Détection d'Alertes
- **Freinage brusque** : Seuils adaptatifs selon conditions
- **Accélération excessive** : Monitoring intelligent des G-forces
- **Virages dangereux** : Analyse vectorielle des trajectoires
- **Vitesse excessive** : Respect limites et zones de sécurité


### Gestion Intelligente des Véhicules
- Basculement automatique entre véhicules
- Profils personnalisés par véhicule
- Historique et statistiques de conduite
- Calibrage automatique des seuils

## Technologies

### Frontend Mobile
```
🤖 Android SDK (Java)
📡 Retrofit 2 - API REST
🔄 Gson - JSON parsing
📱 Navigation Component
💾 SharedPreferences - Stockage local
📊 MPAndroidChart - Graphiques
```

### Capteurs
```
📱 Android Sensor Framework
🧠 Algorithmes de détection personnalisés
📍 Google Location Services
⚡ Traitement temps réel
```

## Captures d'écran

**partie mobile**
<div align="center">
<table>
  <tr>
    <td align="center">
      <img src="./assets/welcome_page.jpeg" alt="Page d'accueil" width="200" height="400"/>
      <br><strong>Page d'Accueil</strong>
    </td>
    <td align="center">
      <img src="./assets/creation_de_compte.jpeg" alt="Création de compte" width="200" height="400"/>
      <br><strong>Inscription</strong>
    </td>
    <td align="center">
      <img src="./assets/se_connecter.jpeg" alt="Accéléromètre" width="200" height="400"/>
      <br><strong>Se connecter</strong>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="./assets/gps.jpeg" alt="GPS" width="200" height="400"/>
      <br><strong>GPS</strong>
    </td>
    <td align="center">
      <img src="./assets/gyroscope.jpeg" alt="Gyroscope" width="200" height="400"/>
      <br><strong>Gyroscope</strong>
    </td>
    <td align="center">
      <!-- Espace pour future capture -->
      <img src="./assets/accelerometre.jpeg" alt="À venir" width="200" height="400"/>
      <br><strong>Accéléromètre</strong>
    </td>
  </tr>
</table>
</div>


**partie web**
<div align="center">
<table>
  <tr>
    <td align="center">
      <img src="./assets/Gestion_des_alertes.png" alt="Page d'accueil" width="200" height="400"/>
      <br><strong>  Gestion des alertes</strong>
    </td>
    <td align="center">
      <img src="./assets/Gestion_des_véhicules.png" alt="Création de compte" width="200" height="400"/>
      <br><strong>Gestion des véhicules</strong>
    </td>
    <td align="center">
      <img src="./assets/Gestion_des_utilisateurs.png" alt="Accéléromètre" width="200" height="400"/>
      <br><strong>Gestion des utilisateurs</strong>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="./assets/Données_des_capteurs_accelerometre.png" alt="GPS" width="200" height="400"/>
      <br><strong>capteur accéléromètre</strong>
    </td>
    <td align="center">
      <img src="./assets/Données_des_capteurs_gyroscope.png" alt="Gyroscope" width="200" height="400"/>
      <br><strong>capteurs gyroscope</strong>
    </td>
    <td align="center">
      <!-- Espace pour future capture -->
      <img src="./assets/Localisation_des_Véhicules.png" alt="À venir" width="200" height="400"/>
      <br><strong>Localisation des Véhicules</strong>
    </td>
  </tr>
</table>
</div>



## Installation

### Prérequis

| Composant | Version requise |
|-----------|----------------|
| Android Studio | 4.0+ |
| SDK Android | API 21+ (Android 5.0) |
| Appareil | Capteurs obligatoires |
| Connexion | Internet requis |

### Configuration Rapide

1. **Cloner le repository**
   ```bash
   git clone https://github.com/abdelboulgha/AI-DRIVE.git
   cd AI-DRIVE
   ```

2. **Configuration API**
   
   Modifiez `app/src/main/java/com/aidrive/api/ApiClient.java` :
   ```java
   public class ApiClient {
       // Remplacez par l'IP de votre serveur backend
       private static final String BASE_URL = "http://VOTRE_IP:8080/api/v1/";
       
       // Configuration SSL en production
       private static final boolean USE_HTTPS = false; // true en production
   }
   ```

3. **Vérification des permissions**
   
   Dans `app/src/main/AndroidManifest.xml` :
   ```xml
   <!--  Localisation précise -->
   <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
   <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
   
   <!--  Réseau -->
   <uses-permission android:name="android.permission.INTERNET" />
   <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
   
   <!--  Performance -->
   <uses-permission android:name="android.permission.WAKE_LOCK" />
   <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
   ```


## Utilisation

###  Premier lancement

1. ** Création de compte**
   - Email valide + mot de passe sécurisé
   - Validation par email (optionnel)

2. ** Configuration véhicule**
   - Sélection dans catalogue ou création personnalisée
   - Calibrage initial des capteurs

3. ** Permissions système**
   - Localisation : "Toujours autoriser"
   - Capteurs : Accès automatique
   - Notifications : Recommandé

### Utilisation Quotidienne
1. **Connexion** : Se connecter avec vos identifiants
2. **Sélection véhicule** : L'application sélectionne automatiquement le dernier véhicule utilisé
3. **Conduite** : L'application surveille automatiquement en arrière-plan
4. **Alertes** : Réception de notifications en cas de conduite dangereuse

###  Interface utilisateur

| Onglet | Fonction | Données affichées |
|--------|----------|-------------------|
|  **Dashboard** | Vue d'ensemble | Score conduite, alertes récentes |
|  **Accéléromètre** | Monitoring G-forces | Graphiques temps réel X,Y,Z |
|  **GPS** | Localisation | Vitesse, altitude, trajet |
|  **Gyroscope** | Stabilité | Rotations, inclinaisons |
|  **Historique** | Statistiques | Trajets, tendances, progression |

## 🏗️ Architecture

![architecture Logo](./assets/architecture.png)



## Sécurité

###  Authentification
- **JWT Tokens** : Expiration automatique (24h)
- **Refresh Tokens** : Renouvellement transparent
- **Chiffrement** : AES-256 pour données sensibles
- **HTTPS** : Communication sécurisée en production



## 🗺️ Roadmap

###  Version 1.1 (Q2 2025)
- [ ] 🌙 Mode nuit automatique
- [ ] 🎵 Intégration assistant vocal
- [ ] 📱 Widget tableau de bord
- [ ] 🌍 Support multi-langues

### Version 2.0 (Q4 2025)
- [ ] 🧠 IA prédictive avancée
- [ ] 👥 Partage social des scores
- [ ] 🏆 Système de gamification
- [ ] ☁️ Synchronisation cloud

###  Vision long terme
- [ ] 🚙 Intégration véhicules connectés
- [ ] 🏙️ Données de trafic temps réel
- [ ] 📱 Version iOS
- [ ] 🌐 API publique pour développeurs

## 🤝 Contribution

Nous accueillons toutes les contributions ! 

###  Comment contribuer

1. **🍴 Fork** le repository
2. **🌿 Créez** une branche feature (`git checkout -b feature/AmazingFeature`)
3. **💾 Committez** vos changements (`git commit -m 'Add: Amazing Feature'`)
4. **📤 Push** vers la branche (`git push origin feature/AmazingFeature`)
5. **🔄 Ouvrez** une Pull Request

### 📋 Guidelines
- 📝 Code commenté en français
- 🧪 Tests pour nouvelles fonctionnalités
- 📚 Documentation mise à jour
- 🎨 Respect des conventions Android



## 👥 Équipe

### 🏗️ Développeurs principaux

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/abdelboulgha.png" width="100px;" alt=""/><br>
      <sub><b>Abdelillah Boulgha</b></sub><br>
      <sub>🚗 Lead Developer</sub><br>
      <a href="mailto:boulghaabdelillah@gmail.com">📧 Contact</a>
    </td>
    <td align="center">
      <img src="https://github.com/KAOUTARKIKA.png" width="100px;" alt=""/><br>
      <sub><b>Kaoutar Boubkari</b></sub><br>
      <sub>📱 Lead Developer</sub><br>
      <a href="mailto:boubkarikaoutar1@gmail.com">📧 Contact</a>
    </td>
  </tr>
</table>

---

###  Support & Contact

- **Bugs** : [Issues GitHub](https://github.com/abdelboulgha/AI-DRIVE/issues)
- **Suggestions** : [Discussions](https://github.com/abdelboulgha/AI-DRIVE/discussions)
- **Email** : boulghaabdelillah@gmail.com
- **Email** : boubkarikaoutar1@gmail.com
- **Site web** : [AI-Drive.com](https://ai-drive.com) *(à venir)*

---

<div align="center">

**🚗 Conduisez plus intelligemment avec AI-Drive 🚗**

[![Télécharger](https://img.shields.io/badge/Télécharger-Google%20Play-green?style=for-the-badge&logo=google-play)](https://play.google.com/store/apps/details?id=com.aidrive)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/abdelboulgha/AI-DRIVE)


</div>