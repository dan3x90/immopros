import { Router } from 'express';
const informationRouter = Router();

// Module de gestion d'authentification
import isAuthMw from '../middlewares/isAuthMw.js';

// Module de schéma
import validationService from '../services/Validation/validationService.js';

// Import des controllers
import informationController from '../controllers/informationController.js';

/* ######################################## INFORMATION ######################################## */

/**
 * @swagger
 * /informations/:
 *   get:
 *     summary: Récupérer toutes les informations d'un collaborateur via son token
 *     description: Méthode pour récupérer toutes les informations d'un collaborateur via son token
 *     tags: [Informations]
 *     parameters:
 *       - name: JsonWebToken
 *         in: header
 *         description: Token du collaborateur
 *         required: true
 *     responses:
 *       200:
 *         description: Opération réussie et renvoie les informations
 *       500:
 *         description: Erreur serveur 
 */
// route pour récupérer toutes les informations: 
informationRouter.get('/informations', isAuthMw.isAuth, informationController.getAllInformations);

/**
 * @swagger
 * /informations/:id:
 *   get:
 *     summary: Méthode pour récupérer une information par son id
 *     description: Méthode pour récupérer une information par son id
 *     tags: [Informations]
 *     parameters:
 *       - name: information_id
 *         in: path
 *         description: id de l'information
 *         required: true
 *     responses:
 *       200:
 *         description: Opération réussie et renvoie les informations
 *       404:
 *         description: Contenu non trouvé
 *       500:
 *         description: Erreur serveur 
 */
// route pour récupérer une information par son id: 
informationRouter.get('/informations/:id', isAuthMw.isAuth, informationController.getInformationById);

/**
 * @swagger
 * /informations/:
 *   post:
 *     summary: Méthode pour créer une information
 *     description: Méthode pour créer une information
 *     tags: [Informations]
 *     requestBody:
 *       description: Information à créer
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *                 description: Type of information
 *               owner_name:
 *                 type: string
 *               owner_email:
 *                 type: string
 *               address_number:
 *                 type: integer
 *               address_street:
 *                 type: string
 *               code_zip:
 *                 type: integer
 *               address_city:
 *                 type: string
 *               address_info:
 *                 type: string
 *               source:
 *                 type: string
 *               category:
 *                 type: string
 *               comment:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *               collaborator_id:
 *                 type: integer
 *                 description: Reference to collaborator ID
 *               sector_id:
 *                 type: integer
 *                 description: Reference to sector ID
 *               phone_1:
 *                 type: string
 *               phone_2:
 *                 type: string
 *               notification_date:
 *                 type: string
 *                 format: date
 *               longitude:
 *                 type: number
 *                 format: float
 *               latitude:
 *                 type: number
 *                 format: float
 *     responses:
 *       201:
 *         description: Création d'un document réussie
 *       500:
 *         description: Erreur serveur
 */
// route pour créer une information: 
informationRouter.post('/informations', isAuthMw.isAuth, informationController.createInformation);

/**
 * @swagger
 * /informations/{id}:
 *   patch:
 *     summary: Méthode pour mettre à jour une information
 *     description: Méthode pour mettre à jour une information
 *     tags: [Informations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'information à mettre à jour
 *     requestBody:
 *       description: Information à mettre à jour
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *               owner_name:
 *                 type: string
 *               owner_email:
 *                 type: string
 *               address_number:
 *                 type: integer
 *               address_street:
 *                 type: string
 *               code_zip:
 *                 type: integer
 *               address_city:
 *                 type: string
 *               address_info:
 *                 type: string
 *               source:
 *                 type: string
 *               category:
 *                 type: string
 *               comment:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *               collaborator_id:
 *                 type: integer
 *               sector_id:
 *                 type: integer
 *               phone_1:
 *                 type: string
 *               phone_2:
 *                 type: string
 *               notification_date:
 *                 type: string
 *                 format: date
 *               longitude:
 *                 type: number
 *                 format: float
 *               latitude:
 *                 type: number
 *                 format: float
 *     responses:
 *       200:
 *         description: Opération réussie et renvoie les informations mises à jour
 *       500:
 *         description: Erreur serveur
    */
// route pour mettre à jour une information: 
informationRouter.patch('/informations/:id',isAuthMw.isAuth, validationService.isInformationSchema("update"), informationController.updateInformation);

/**
  * @swagger
 * '/informations/:id':
 *   delete:
 *     summary: Méthode pour supprimer une information
 *     description: Méthode pour supprimer une information
 *     tags: [Informations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'information à supprimer
 *     responses:
 *       204:
 *         description: Opération réussie et information supprimée
 *       404:
 *         description: Demande incorrecte (ID manquant ou invalide)
 *       500:
 *         description: Erreur serveur
 */
// route pour supprimer une information: 
informationRouter.delete('/informations/:id',isAuthMw.isAuth, informationController.deleteInformation);

export default informationRouter;