import Joi from "joi";

const sectorSchema = {
  post: Joi.object({
    label: Joi.string().pattern(/^[A-Za-z0-9 .,'!?-]+$/).required(),
    color_code: Joi.string().pattern(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).required(), 
    city: Joi.string().required(),
    code_zip: Joi.number().required(),
    collaborator_id: Joi.number().integer().min(1).required(),
  }).unknown(),

  update: Joi.object({
    label: Joi.string().pattern(/^[A-Za-z0-9 .,'!?-]+$/),
    color_code: Joi.string().pattern(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
    city: Joi.string(),
    code_zip: Joi.number(),
    collaborator_id: Joi.number().min(1).integer(),
  }).unknown(),
};

export default sectorSchema;