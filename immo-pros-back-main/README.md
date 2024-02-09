# API Documentation

Voici le guide de démarrage de notre API.

Liens de l'API : 
`https://immopros-api-e940e6a7183e.herokuapp.com`

Liens vers la doc : 
`https://immopros-api-e940e6a7183e.herokuapp.com/docs/`

Fichier de log :
`https://immopros-api-e940e6a7183e.herokuapp.com/logs/2023-10-03.log`

## Configuration initiale

Créer et configurer le fichier `.env` sur le modèle du `.env.example`.

### Paramètres :

- **PORT** : N'importe quel port disponible.
- **PG_URL** : `postgres://USER:PASSWORD@tai.db.elephantsql.com/DBNAME` 
  - Rendez-vous sur votre espace ElephantSQL, sélectionnez "Détail", et vous aurez votre URL entière à copier/coller.
- **JWT_TOKEN** : /!\ Cette API utilise des jsonWebToken /!\ 

### Scripts :
- **Npm run dev pour nodemon** || **Npm run start pour node** 


---
