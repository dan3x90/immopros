import { Router } from 'express';
const supportRouter = Router();

// Import des controllers
import supportController from '../controllers/supportController.js';


/* ######################################## SUPPORT ######################################## */

/**
 * @swagger
 * /reset:
 *   post:
 *     summary: Réinitialisation du mot de passe
 *     description: Méthode pour demander une réinitialisation du mot de passe par envoie de mail
 *     tags: [Support]
 *     requestBody:
 *       description: Email pour lequel la réinitialisation du mot de passe est demandée
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Email envoyé
 *       500:
 *         description: Erreur serveur
 */
// route pour reset le password par envoie auto de mail
supportRouter.post('/reset', supportController.resetPassword);

/**
 * @swagger
 * /reset/token:
 *   post:
 *     summary: Définir un nouveau mot de passe
 *     description: Méthode pour définir un nouveau mot de passe à l'aide d'un token envoyé par mail
 *     tags: [Support]
 *     requestBody:
 *       description: Nouveau mot de passe et token pour la réinitialisation
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *               token:
 *                 type: string
 *     responses:
 *       200:
 *         description: Mot de passe mis à jour
 *       500:
 *         description: Erreur serveur
 */
// route pour reset le password apres envoie du token par mail et verification de ce dernier
supportRouter.post('/reset/token', supportController.setNewPassword);

/**
 * @swagger
 * /support:
 *   post:
 *     summary: Contacter le support
 *     description: Méthode pour envoyer un email au support
 *     tags: [Support]
 *     requestBody:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Email envoyé
 *       500:
 *         description: Erreur serveur
 */
// route pour contacter le support par envoie de mail automatique
supportRouter.post('/support', supportController.contactSupport);

export default supportRouter;
