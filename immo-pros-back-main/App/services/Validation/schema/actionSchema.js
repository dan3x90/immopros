import Joi from "joi";

const actionSchema = {
  post: Joi.object({
    description: Joi.string()
      .min(5)
      .required(),
      date: Joi.date().iso().required(),
      /* date: Joi.date() 
      .format('YYYY-MM-DD'), */
    information_id: Joi.number().integer().min(1).required(),
  }).unknown(),

  update: Joi.object({
    description: Joi.string()
      .min(5),
      date: Joi.date().iso(),
      /* date: Joi.date() 
      .format('YYYY-MM-DD'), */
    information_id: Joi.number().integer().min(1),
  }).unknown(),
};

export default actionSchema;