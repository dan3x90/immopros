import Joi from "joi";

const loginSchema = {
  post: Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(3)
      .required(),
  }),
};

export default loginSchema;