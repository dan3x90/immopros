import { Router } from 'express';
const authRouter = Router();

// Module de schéma
import validationService from '../services/Validation/validationService.js';

// Import des controllers
import authController from '../controllers/authController.js';

/* ######################################## AUTHENTIFICATION ######################################## */

/**
 * @swagger
 * /login:
 *  post:
 *   summary: Se connecter à l'app Immo-Pros
 *   description: Connecte l'utilisateur et renvoie un token JWT
 *   tags: [Authentification]
 */                   
// route pour se connecter:
authRouter.post('/login', validationService.isLoginSchema("post"), authController.login);

/**
 * @swagger
 * /logout:
 *   get:
 *     summary: Se déconnecter de l'app Immo-Pros
 *     description: Déconnecte l'utilisateur
 *     tags: [Authentification]
 *     responses:
 *       200:
 *         description: Utilisateur déconnecté avec succès
 */
// route pour se déconnecter:
authRouter.get('/logout', authController.logout);

export default authRouter;