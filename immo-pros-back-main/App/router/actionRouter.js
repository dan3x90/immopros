import { Router } from 'express';
const actionRouter = Router();

// Module de gestion d'authentification
import isAuthMw from '../middlewares/isAuthMw.js';

// Module de schéma
import validationService from '../services/Validation/validationService.js';

// Import des controllers
import actionController from '../controllers/actionController.js';

/* ######################################## ACTIONS ######################################## */

/**
 * @swagger
 * /informations/{information_id}/actions:
 *   get:
 *     summary: Récupère toutes les actions d'une information
 *     tags: [Actions]
 *     parameters:
 *       - in: path
 *         name: information_id
 *         required: true
 *         description: ID de l'information
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Liste des actions pour l'information spécifiée
 *       500:
 *         description: Erreur serveur
 */
// route pour récupérer toutes les actions d'une information: 
actionRouter.get('/informations/:information_id/actions', isAuthMw.isAuth, actionController.getAllActionsByInformationId);

/**
 * @swagger
 * /informations/actions/{action_id}:
 *   get:
 *     summary: Récupère une action par son ID
 *     tags: [Actions]
 *     parameters:
 *       - in: path
 *         name: action_id
 *         required: true
 *         description: ID de l'action
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Détails de l'action
 *       401:
 *         description: Non autorisé
 *       404:
 *         description: Action non trouvée
 *       500:
 *         description: Erreur serveur
 */
// route pour récupérer l'action par son id d'une information:
actionRouter.get('/informations/actions/:action_id',isAuthMw.isAuth, actionController.getActionById);

/**
 * @swagger
 * /informations/{information_id}/actions:
 *   post:
 *     summary: Crée une action pour une information spécifiée
 *     tags: [Actions]
 *     parameters:
 *       - in: path
 *         name: information_id
 *         required: true
 *         description: ID de l'information
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Action à créer pour l'information spécifiée
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *               date:
 *                 type: date
 *     responses:
 *       201:
 *         description: Action créée
 *       500:
 *         description: Erreur serveur
 */
// route pour créer une action pour une information: 
actionRouter.post('/informations/:information_id/actions',isAuthMw.isAuth, validationService.isActionSchema("post"), actionController.createActionByInformationId);

/**
 * @swagger
 * /informations/actions/{action_id}:
 *   patch:
 *     summary: Met à jour une action par son ID
 *     tags: [Actions]
 *     parameters:
 *       - in: path
 *         name: action_id
 *         required: true
 *         description: ID de l'action
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Données à mettre à jour pour l'action spécifiée
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Action mise à jour
 *       400:
 *         description: Demande incorrecte (données manquantes ou invalides)
 *       500:
 *         description: Erreur serveur
 */
// route pour mettre à jour une action:
actionRouter.patch('/informations/actions/:action_id',isAuthMw.isAuth, validationService.isActionSchema("update"), actionController.updateAction);

/**
 * @swagger
 * /informations/actions/{action_id}:
 *   delete:
 *     summary: Supprime une action par son ID
 *     tags: [Actions]
 *     parameters:
 *       - in: path
 *         name: action_id
 *         required: true
 *         description: ID de l'action
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Action supprimée
 *       404:
 *         description: Action non trouvée
 *       500:
 *         description: Erreur serveur
 */
// route pour supprimer une action:
actionRouter.delete('/informations/actions/:action_id',isAuthMw.isAuth, actionController.deleteAction);

export default actionRouter;