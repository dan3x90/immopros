import Joi from "joi";

const informationSchema = {
  post: Joi.object({
    type: Joi.string().valid('appartement', 'terrain', 'maison').required(),
    owner_name: Joi.string().pattern(/^[A-Za-z .'-]+$/).allow(null, ""),
    owner_email: Joi.string().email().allow(null, ""),
    address_number: Joi.number().integer().required(),
    address_street: Joi.string().required(),
    code_zip: Joi.number().required(),
    address_city: Joi.string().required(),
    address_info: Joi.string().allow(null, ""),
    source: Joi.string().required(),
    category: Joi.string().valid('à vendre', 'succession en cours', 'potentiellement à vendre').required(),
    comment: Joi.string().allow(null, ""),
    date: Joi.date().required(),
    collaborator_id: Joi.number().integer().min(1).required(),
    sector_id: Joi.number().integer().min(1).required(),
    phone_1: Joi.string().pattern(/^\d{10}$/).allow(null, ""),
    phone_2: Joi.string().pattern(/^\d{10}$/).allow(null, ""),
    notification_date: Joi.date().required(),
  }).unknown(),

  update: Joi.object({
    type: Joi.string().valid('appartement', 'terrain', 'maison'),
    owner_name: Joi.string().pattern(/^[A-Za-z .'-]+$/).allow(null, ""),
    owner_email: Joi.string().email().allow(null, ""),
    address_number: Joi.number().integer(),
    address_street: Joi.string(),
    code_zip: Joi.number(),
    address_city: Joi.string(),
    address_info: Joi.string().allow(null, ""),
    source: Joi.string(),
    category: Joi.string().valid('à vendre', 'succession en cours', 'potentiellement à vendre'),
    comment: Joi.string().allow(null, ""),
    date: Joi.date(),
    collaborator_id: Joi.number().integer().min(1),
    sector_id: Joi.number().integer().min(1),
    phone_1: Joi.string().pattern(/^\d{10}$/).allow(null, ""),
    phone_2: Joi.string().pattern(/^\d{10}$/).allow(null, ""),
    notification_date: Joi.date().allow(null, ""),
  }).unknown(),
};

export default informationSchema;