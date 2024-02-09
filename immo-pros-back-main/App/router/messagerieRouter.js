import { Router } from 'express';
const messagerieRouter = Router();

// Module de gestion d'authentification
import isAuthMw from '../middlewares/isAuthMw.js';

// Import des controllers
import messagerieController from '../controllers/messagerieController.js';

/* ######################################## MESSAGERIE ######################################## */

// Route pour crée un message:
messagerieRouter.post('/messages', isAuthMw.isAuth, messagerieController.postMessage);

// Route pour récupérer les messages d'une discution par leur discution_ID:
messagerieRouter.get('/discussions/:id', isAuthMw.isAuth, messagerieController.getAllMessagesByDiscussionId);

// Route pour supprimer un message:
messagerieRouter.delete('/messages/:id', isAuthMw.isAuth, messagerieController.deleteMessage);

// Route pour vérifier une discution ou sinon la créer:
messagerieRouter.post('/checkDiscussionExistsAndCreate', isAuthMw.isAuth, messagerieController.checkDiscussionExistsAndCreate);

export default messagerieRouter;