import actionSchema from "./schema/actionSchema.js";
import informationSchema from "./schema/informationSchema.js";
import sectorSchema from "./schema/sectorSchema.js";
import collaboratorSchema from "./schema/collaboratorSchema.js";
import avatarSchema from "./schema/avatarSchema.js";
import loginSchema from "./schema/loginSchema.js";
import APIError from "../APIError.js";

const validationService = {
  /**
   * Vérification du format des données reçues
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  isActionSchema(schema) {
    return (req, res, next) => {
      const { error } = actionSchema[schema].validate(req.body);
      if (error) {
        next(
          new APIError("Erreur !!! ce n'est pas un action schema !", 400)
        );
      } else {
        next();
      }
    };
  },

  /**
   * Vérification du format des données reçues
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  isInformationSchema(schema) {
    return (req, res, next) => {
      const { error } = informationSchema[schema].validate(req.body);
      if (error) {
        next(
          new APIError("Erreur !!! ce n'est pas une information schema !", 400)
        );
      } else {
        next();
      }
    };
  },

  /**
   * Vérification du format des données reçues
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  isSectorSchema(schema) {
    return (req, res, next) => {
      const { error } = sectorSchema[schema].validate(req.body);
      if (error) {
        next(new APIError("Erreur !!! ce n'est pas un sector schema !", 400))
      } else {
        next();
      }
    };
  },

  /**
   * Vérification du format des données reçues
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  isCollaboratorSchema(schema) {
    return (req, res, next) => {
      const { error } = collaboratorSchema[schema].validate(req.body);
      if (error) {
        next(
          new APIError("Erreur !!! ce n'est pas un collaborator schema !", 400)
        );
      } else {
        next();
      }
    };
  },

  /**
   * Vérification du format des données reçues
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  isAvatarSchema(schema) {
    return (req, res, next) => {
      const { error } = avatarSchema[schema].validate(req.body);
      if (error) {
        next(new APIError("Erreur !!! ce n'est pas un avatar schema !", 400)
        );
      } else {
        next();
      }
    };
  },

  isLoginSchema(schema) {
    return (req, res, next) => {
      const { error } = loginSchema[schema].validate(req.body);
      if (error) {
        next(new APIError("Erreur !!! ce n'est pas un avatar schema !", 400)
        );
      } else {
        next();
      }
    };
  },
};

export default validationService;
