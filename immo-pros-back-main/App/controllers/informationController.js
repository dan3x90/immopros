import dataMapper from '../models/informationDatamapper.js';
import coordinateService from '../services/CoordinateService.js';

const informationController = {

    // Méthode pour récupérer toutes les informations d'un collaborateur
    getAllInformations: async (req, res, next) => {
        const collaboratorId = req.user.resultId
        

        const {error, result} = await dataMapper.getAllInformations(collaboratorId);

        if (error) {
            // si j'ai une erreur => next(error)
            next(error);
        }
        else {
            // si tout va bien
            res.status(200).json(result);
        }
    },

    // Méthode pour récupérer une information par son id
    getInformationById: async (req, res, next) => {
        const informationId = parseInt(req.params.id, 10);

        const {error, result} = await dataMapper.getInformationById(informationId);

        if (error) {
            // si j'ai une erreur => next(error)
            next(error);
        }
        else {
            // si tout va bien
            res.status(200).json(result);
        }
    },

    // Méthode pour créer une information
    createInformation: async (req, res, next) => {

        const {address_number, address_street, code_zip, address_city} = req.body;
        const adresse = `${address_number} ${address_street} ${code_zip} ${address_city}`;
        const {error, longitude, latitude} = await coordinateService.getAdressCoordinate(adresse);
        if (error) {
            // si j'ai une erreur => next(error)
            next(error);
            
        } else {

        const {error, result} = await dataMapper.createInformation(req.body, longitude, latitude);
        

        if (error) {
            // si j'ai une erreur => next(error)
            next(error);
        }
        else {
            // si tout va bien
            res.status(201).json({ 
                message: 'Information successfully created.',
                result
            });
        }
    }
},

    // Méthode pour mettre à jour une information
    updateInformation: async (req, res, next) => {
        const informationId = parseInt(req.params.id, 10);
        const informationData = req.body;

        const {error, result} = await dataMapper.updateInformation(informationId, informationData);

        if (error) {
            // si j'ai une erreur => next(error)
            next(error);
        }
        else {
            // si tout va bien
            res.status(200).json({message: 'Information successfully updated.', result});
        }
    },

    // Méthode pour supprimer une information
    deleteInformation: async (req, res, next) => {
        const informationId = parseInt(req.params.id, 10);

        const { error, result } = await dataMapper.deleteInformation(informationId);

        if (error) {
            // si j'ai une erreur => next(error)
            next(error);
        }
        else {
            // si tout va bien
            res.status(204).json({ message: 'Information successfully deleted.', result });
        }

    }


};

export default informationController;