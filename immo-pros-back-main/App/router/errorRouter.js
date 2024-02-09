import { Router } from 'express';
const errorRouter = Router();

// Module de gestion d'erreur
import errorHandler from '../services/errorHandler.js';

                        /* ######################################## LOAD LOGS ######################################## */

/**
 * @swagger
 * /logs/{log}:
 *   get:
 *     summary: Télécharge un fichier de log spécifique
 *     tags: [Logs]
 *     parameters:
 *       - in: path
 *         name: log
 *         required: true
 *         description: Nom du fichier de log à télécharger (format YYYY-MM-DD.log)
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Opération réussie et renvoie le fichier de log
 *         content:
 *           application/octet-stream:
 *             schema:
 *               type: string
 *               format: binary
 *       404:
 *         description: Fichier de log non trouvé ou URL invalide
 *       500:
 *         description: Erreur serveur 
 */
errorRouter.get('/logs/:log', (req, res) => {
    // const filepath = join(__dirname, `../../log/${req.params.filename}`);
    const filepath = `/app/log/${req.params.log}`
    res.download(filepath);
});

/* ######################################## ERROR HANDLER ######################################## */

// Middleware de gestion des urls non trouvées
errorRouter.use(errorHandler.notFound);

// Middleware de gestion d'erreur
errorRouter.use(errorHandler.manage);

export default errorRouter;