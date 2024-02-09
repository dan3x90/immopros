import { Router } from 'express';
const sectorRouter = Router();

// Module de gestion d'authentification
import isAdminMw from '../middlewares/isAdminMw.js';

// Module de schéma
import validationService from '../services/Validation/validationService.js';

// Import des controllers
import sectorController from '../controllers/sectorController.js';

/* ######################################## SECTOR ######################################## */

/**
 * @swagger
 * /sectors:
 *   get:
 *     summary: Récupère tous les secteurs
 *     tags: [Sectors]
 *     responses:
 *       200:
 *         description: Opération réussie et renvoie les informations
 *       401:
 *         description: Accès non autorisé
 *       500:
 *         description: Erreur serveur 
 */              
// route pour récupérer toutes les secteurs: 
sectorRouter.get('/sectors',isAdminMw.isAdmin, sectorController.getAllSectors);

/**
 * @swagger
 * /sectors/{id}:
 *   get:
 *     summary: Récupère un secteur par son ID
 *     tags: [Sectors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du secteur à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Opération réussie et renvoie les informations
 *       401:
 *         description: Accès non autorisé
 *       404:
 *         description: Contenu non trouvé
 *       500:
 *         description: Erreur serveur 
 */
// route pour récupérer un secteur par son id: 
sectorRouter.get('/sectors/:id',isAdminMw.isAdmin, sectorController.getSectorById);

/**
 * @swagger
 * /sectors:
 *   post:
 *     summary: Crée un nouveau secteur
 *     tags: [Sectors]
 *     requestBody:
 *       description: Données du secteur à créer
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               label:
 *                 type: string
 *               color_code:
 *                 type: string
 *               city:
 *                 type: string
 *               code_zip:
 *                 type: integer
 *               collaborator_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Création d'un document réussie
 *       401:
 *         description: Accès non autorisé
 *       500:
 *         description: Erreur serveur
 */
// route pour créer un secteur: 
sectorRouter.post('/sectors',isAdminMw.isAdmin, validationService.isSectorSchema("post"), sectorController.createSector);

/**
 * @swagger
 * /sectors/{id}:
 *   patch:
 *     summary: Met à jour un secteur par son ID
 *     tags: [Sectors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du secteur à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Données à mettre à jour pour le secteur
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               label:
 *                 type: string
 *               color_code:
 *                 type: string
 *               city:
 *                 type: string
 *               code_zip:
 *                 type: integer
 *               collaborator_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Opération réussie et renvoie les informations mises à jour
 *       401:
 *         description: Accès non autorisé
 *       500:
 *         description: Erreur serveur
 */
// route pour mettre à jour une secteur: 
sectorRouter.patch('/sectors/:id',isAdminMw.isAdmin, validationService.isSectorSchema("update"), sectorController.updateSector);

/**
 * @swagger
 * /sectors/{id}:
 *   delete:
 *     summary: Supprime un secteur par son ID
 *     tags: [Sectors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du secteur à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Opération réussie et information supprimée
 *       401:
 *         description: Accès non autorisé
 *       404:
 *         description: Demande incorrecte (ID manquant ou invalide)
 *       500:
 *         description: Erreur serveur
 */
// route pour supprimer un secteur:
sectorRouter.delete('/sectors/:id',isAdminMw.isAdmin, sectorController.deleteSector);

export default sectorRouter;