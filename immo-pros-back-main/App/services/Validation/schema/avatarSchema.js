import Joi from 'joi';

const avatarSchema = {
    post: Joi.object({
        label: Joi.string().min(3).required(),
        url: Joi.string().uri().required(),
    }).unknown(),

    update: Joi.object({
        label: Joi.string().min(3),
        url: Joi.string().uri(),
    
    }).unknown(),
};

export default avatarSchema;