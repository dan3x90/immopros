import { Router } from 'express';
const collaboratorRouter = Router();

// Module de gestion d'authentification
import isAuthMw from '../middlewares/isAuthMw.js';
import isAdminMw from '../middlewares/isAdminMw.js';

// Module de schéma
import validationService from '../services/Validation/validationService.js';

// Import des controllers
import collaboratorController from '../controllers/collaboratorController.js';

/* ######################################## COLLABORATOR ######################################## */

/**
 * @swagger
 * /collaborator:
 *   get:
 *     summary: Récupère tous les Collaborators
 *     tags: [Collaborators]
 *     responses:
 *       200:
 *         description: La liste des Collaborators
 *       401:
 *         description: Accès non autorisé
 *       500:
 *         description: Erreur serveur
 */
// route pour récupérer tous les Collaborator: 
collaboratorRouter.get('/collaborator',isAdminMw.isAdmin, collaboratorController.getAllCollaborators);

// route pour récupérer tous les Collaborator pour la messagerie:
collaboratorRouter.get('/collaborators',isAuthMw.isAuth, collaboratorController.getAllCollaboratorsForMessagerie);

/**
 * @swagger
 * /collaborator/{id}:
 *   get:
 *     summary: Récupère un Collaborator par son ID
 *     tags: [Collaborators]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du Collaborator
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Détails du Collaborator
 *       401:
 *         description: Accès non autorisé
 *       404:
 *         description: Collaborator non trouvé
 *       500:
 *         description: Erreur serveur
 */
// route pour récupérer un Collaborator par son id: 
collaboratorRouter.get('/collaborator/:id',isAuthMw.isAuth, isAdminMw.isAdmin, collaboratorController.getCollaboratorById);


/**
 * @swagger
 * /collaborator:
 *   post:
 *     summary: Crée un nouveau Collaborator
 *     tags: [Collaborators]
 *     requestBody:
 *       description: Données du Collaborator à créer
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *               lastname:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               phone:
 *                 type: string
 *               acces:
 *                 type: boolean
 *               secret_key:
 *                 type: string
 *               role_id:
 *                 type: integer
 *               avatar_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Collaborator créé avec succès
 *       500:
 *         description: Erreur serveur
 */
// route pour créer un Collaborator: 
collaboratorRouter.post('/collaborator', isAuthMw.isAuth, validationService.isCollaboratorSchema("post"), collaboratorController.createCollaborator);

/**
 * @swagger
 * /collaborator/{id}:
 *   patch:
 *     summary: Met à jour un Collaborator par son ID
 *     tags: [Collaborators]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du Collaborator à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Données à mettre à jour pour le Collaborator
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *               lastname:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               phone:
 *                 type: string
 *               acces:
 *                 type: boolean
 *               secret_key:
 *                 type: string
 *               role_id:
 *                 type: integer
 *               avatar_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Collaborator mis à jour avec succès
 *       500:
 *         description: Erreur serveur
 */
// route pour mettre à jour un Collaborator: 
collaboratorRouter.patch('/collaborator/:id',isAuthMw.isAuth, validationService.isCollaboratorSchema("update"), collaboratorController.updateCollaborator);

/**
 * @swagger
 * /collaborator/{id}:
 *   delete:
 *     summary: Supprime un Collaborator par son ID
 *     tags: [Collaborators]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du Collaborator à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Collaborator supprimé avec succès
 *       404:
 *         description: Collaborator non trouvé
 *       401:  
 *       500:
 *         description: Erreur serveur
 */
// route pour supprimer un Collaborator:
collaboratorRouter.delete('/collaborator/:id', isAdminMw.isAdmin, collaboratorController.deleteCollaborator);

export default collaboratorRouter;