import { Router } from 'express';
const avatarRouter = Router();

// Module de gestion d'authentification
import isAuthMw from '../middlewares/isAuthMw.js';
import isAdminMw from '../middlewares/isAdminMw.js';

// Module de schéma
import validationService from '../services/Validation/validationService.js';

// Import des controllers
import avatarController from '../controllers/avatarController.js';

// Import des utils
import upload from '../utils/multer.js';

/* ######################################## AVATAR ######################################## */

/**
 * @swagger
 * /avatars:
 *   get:
 *     summary: Récupère tous les avatars
 *     tags: [Avatars]
 *     responses:
 *       200:
 *         description: Opération réussie et renvoie les informations
 *       500:
 *         description: Erreur serveur 
 */ 
// route pour récuperer tous les avatars: 
avatarRouter.get('/avatars',isAuthMw.isAuth, avatarController.getAllAvatars);

/**
 * @swagger
 * /avatars/{id}:
 *   get:
 *     summary: Récupère un avatar par son ID
 *     tags: [Avatars]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'avatar à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Opération réussie et renvoie les informations
 *       404:
 *         description: Contenu non trouvé
 *       500:
 *         description: Erreur serveur 
 */
// route pour récupérer un avatar par son id: 
avatarRouter.get('/avatars/:id',isAuthMw.isAuth, avatarController.getAvatarById);

/**
 * @swagger
 * /avatars:
 *   post:
 *     summary: Crée un nouvel avatar
 *     tags: [Avatars]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       description: Données de l'avatar à créer
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               label:
 *                 type: string
 *                 description: Nom ou étiquette de l'avatar
 *               url:
 *                 type: string
 *                 description: URL ou chemin vers l'image de l'avatar
 *     responses:
 *       201:
 *         description: Création d'un avatar réussie
 *       500:
 *         description: Erreur serveur
 */
// route pour créer un avatar:
avatarRouter.post('/avatars',isAdminMw.isAdmin, validationService.isAvatarSchema("post"), avatarController.createAvatar);

/**
 * @swagger
 * /avatars/{id}:
 *   patch:
 *     summary: Met à jour un avatar par son ID
 *     tags: [Avatars]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'avatar à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Données à mettre à jour pour l'avatar
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               label:
 *                 type: string
 *                 description: Nom ou étiquette de l'avatar
 *               url:
 *                 type: string
 *                 description: URL ou chemin vers l'image de l'avatar
 *     responses:
 *       200:
 *         description: Opération réussie et renvoie les informations mises à jour
 *       401:
 *         description: Accès non autorisé
 *       500:
 *         description: Erreur serveur
 */
// route pour mettre à jour un avatar:
avatarRouter.patch('/avatars/:id',isAdminMw.isAdmin, validationService.isAvatarSchema("update"), avatarController.updateAvatar);

/**
 * @swagger
 * /avatars/{id}:
 *   delete:
 *     summary: Supprime un avatar par son ID
 *     tags: [Avatars]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'avatar à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Opération réussie et avatar supprimé
 *       401:
 *         description: Accès non autorisé
 *       404:
 *         description: Avatar non trouvé
 *       500:
 *         description: Erreur serveur
 */
// route pour supprimer un avatar:
avatarRouter.delete('/avatars/:id',isAdminMw.isAdmin, avatarController.deleteAvatar);


// route pour télécharger un avatar:
avatarRouter.post('/avatars/download',isAuthMw.isAuth ,upload.single("file"), avatarController.downloadAvatard);

export default avatarRouter;