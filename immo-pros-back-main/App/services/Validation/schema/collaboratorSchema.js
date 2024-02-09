import Joi from 'joi';

// Schema pour la validation des données de création/update d'une information:
const collaboratorSchema = {
    post: Joi.object({
        firstname: Joi.string().pattern(/^[A-Za-z .'\-]+$/).required(),
        lastname: Joi.string().pattern(/^[A-Za-z .'\-]+$/).required(),
        email: Joi.string().email().allow(null, '').required(), 
        password: Joi.string().required(),
        phone: Joi.string().pattern(/^\d{10}$/).required(),
        acces: Joi.boolean().required(),
        secret_key: Joi.string().allow(null, ''),
        avatar_id: Joi.number().allow(null, ""),

    }).unknown(),

    update: Joi.object({
        firstname: Joi.string().pattern(/^[A-Za-z .'\-]+$/),
        lastname: Joi.string().pattern(/^[A-Za-z .'\-]+$/),
        email: Joi.string().email().allow(null, ''),
        phone: Joi.string().pattern(/^\d{10}$/),
        acces: Joi.boolean(),
        secret_key: Joi.string().allow(null, ''),
        avatar_id: Joi.number(),

    }).unknown(),
};

export default collaboratorSchema;