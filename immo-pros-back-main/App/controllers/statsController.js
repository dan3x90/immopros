import dataMapper from "../models/statsDatamapper.js";

const statsController = {

    getCountOfInfoByCollaborator: async (_, res, next) => {    
        const { error, result }= await dataMapper.getCountOfInfoByCollaborator();
    
        if (error) {
            console.log(error);
            // si j'ai une erreur => next(error)
            next(error);
        }
        else {
            // si tout va bien
            res.status(200).json(result);
        }
    },

    getCountOfInfoBySector: async (_, res, next) => {    
        const { error, result }= await dataMapper.getCountOfInfoBySector();
    
        if (error) {
            console.log(error);
            // si j'ai une erreur => next(error)
            next(error);
        }
        else {
            // si tout va bien
            res.status(200).json(result);
        }
    },

    getCollaboratorInfoBetweenDates: async (req, res, next) => {    
        const { firstDate, secondDate } = req.body;
        const { error, result }= await dataMapper.getCollaboratorInfoBetweenDates(firstDate, secondDate);
    
        if (error) {
            console.log(error);
            // si j'ai une erreur => next(error)
            next(error);
        }
        else {
            // si tout va bien
            res.status(200).json(result);
        }
    },

}

export default statsController;