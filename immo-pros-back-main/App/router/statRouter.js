import { Router } from 'express';
const statRouter = Router();

// Module de gestion d'authentification
import isAdminMw from '../middlewares/isAdminMw.js';

// Import des controllers
import statsController from '../controllers/statsController.js';

/* ######################################## ADMIN STAT ######################################## */

/**
 * @swagger
 * /stats/informations/collaborators:
 *   get:
 *     summary: Récupère le nombre d'informations par collaborateur
 *     tags: [Stats]
 *     security:
 *       - Bearer: []
 *     responses:
 *       200:
 *         description: Opération réussie et renvoie le nombre d'informations par collaborateur
 *       401:
 *         description: Accès non autorisé
 *       500:
 *         description: Erreur serveur 
 */
// route pour récupérer le nombre d'info par collaborateur:
statRouter.get('/stats/informations/collaborators',isAdminMw.isAdmin, statsController.getCountOfInfoByCollaborator);

/**
 * @swagger
 * /stats/informations/sectors:
 *   get:
 *     summary: Récupère le nombre d'informations par secteur
 *     tags: [Stats]
 *     security:
 *       - Bearer: []
 *     responses:
 *       200:
 *         description: Opération réussie et renvoie le nombre d'informations par secteur
 *       401:
 *         description: Accès non autorisé
 *       500:
 *         description: Erreur serveur 
 */
// route pour récupérer le nombre d'info par secteur:
statRouter.get('/stats/informations/sectors',isAdminMw.isAdmin, statsController.getCountOfInfoBySector);


/**
 * @swagger
 * /stats/informations/dates:
 *   post:
 *     summary: Récupère le nombre d'informations par collaborateur entre deux dates
 *     tags: [Stats]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       description: Dates de début et de fin pour la récupération des informations
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstDate:
 *                 type: string
 *                 format: date
 *                 description: Date de début
 *               secondDate:
 *                 type: string
 *                 format: date
 *                 description: Date de fin
 *     responses:
 *       200:
 *         description: Opération réussie et renvoie le nombre d'informations par collaborateur entre les deux dates
 *       401:
 *         description: Accès non autorisé
 *       500:
 *         description: Erreur serveur 
 */
// route pour récupérer le nombre d'info par collaborateur entre deux dates:
statRouter.post('/stats/informations/dates',isAdminMw.isAdmin, statsController.getCollaboratorInfoBetweenDates);

export default statRouter;