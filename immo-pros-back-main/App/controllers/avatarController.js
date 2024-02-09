import dataMapper from "../models/avatarDatamapper.js";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const avatarController = {
    
    // Méthode pour récuperer tous les avatars
    getAllAvatars: async (_, res, next) => {
        const {error, result} = await dataMapper.getAllAvatars();

        if (error) {
            // si j'ai une erreur => next(error)
            next(error);
        }
        else {
            // si tout va bien
            res.status(200).json(result);
        }
    },

    // Méthode pour récupérer un avatar par son id:
    getAvatarById: async (req, res, next) => {
        const avatarId = parseInt(req.params.id, 10);
        const {error, result} = await dataMapper.getAvatarById(avatarId);
        
        if (error) {
            // si j'ai une erreur => next(error)
            next(error);
        }
        else {
            // si tout va bien
            res.status(200).json(result);
        }
    },

    // Méthode pour créer un avatar:
    createAvatar: async (req, res, next) => {
        const {error, result} = await dataMapper.createAvatar(req.body);

        if (error) {
            // si j'ai une erreur => next(error)
            next(error);
        }
        else {
            // si tout va bien
            res.status(201).json({message: 'Avatar successfully created', result});
        }
    },

    // Méthode pour mettre à jour un avatar par son id:
    updateAvatar: async (req, res, next) => {
        const avatarId = parseInt(req.params.id, 10);

        const {error, result} = await dataMapper.updateAvatar(
            avatarId,
            req.body
        );

        if (error) {
            // si j'ai une erreur => next(error)
            next(error);
        }
        else {
            // si tout va bien
            res.status(200).json({message: 'Avatar successfully updated', result});
        }
    },

    // Méthode pour supprimer un avatar par son id:
    deleteAvatar: async (req, res, next) => {
        const avatarId = parseInt(req.params.id, 10);

        const { error, result } = await dataMapper.deleteAvatar(avatarId);

        if (error) {
            // si j'ai une erreur => next(error)
            next(error);
        }
        else {
            // si tout va bien
            res.status(204).json({ message: "Avatar successfully deleted.", result });
        }
    },

    // Méthode pour télécharger un avatar
    downloadAvatard: async (req, res, next) => {
            if (!req.file) {

                return res.status(400).json({ message: 'No files downloaded' });
            }

            const { path, filename } = req.file

            const { error, result } = await dataMapper.downloadAvatard(filename, path);
            
            if (error) {

                next(error);

            } else {
                // si tout va bien

                return res.status(200).json({ message: 'Image successfully downloaded.', result });
            }
    },

}

export default avatarController;
