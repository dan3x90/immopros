import DataMapper from "../models/collaboratorDatamapper.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";
import bcrypt from "bcrypt";

dotenv.config();

const supportController = {

  resetPassword: async (req, res, next) => {
    try {
      const { email } = req.body;
      const {error, result } = await DataMapper.getCollaboratorByEmail(email);
      if (error) {
        // si j'ai une erreur => next(error)
        next(error);
      }

      // Générer un token JWT
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      }); 
      // Création du lien de réinitialisation
      const resetLink = `https://immopros-app.com/reset/token?${token}`;
    
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: email, 
        from: "immoprosoclock@gmail.com", 
        subject: "Réinitialisation du mot de passe",
        text: `Cliquez sur le lien suivant pour réinitialiser votre mot de passe: ${resetLink}`,
      };
      sgMail
        .send(msg) 
        .then(() => {
          console.log("Email sent");
          res.status(200).json("Email envoyé");
        })
        .catch((error) => {
          console.error(error);
        });
    
    } catch (error) {
      console.log(error);
    }
  },

  setNewPassword: async (req, res, next) => {  
    try {
      
      const { password, token } = req.body;
      const { email } = jwt.verify(token, process.env.JWT_SECRET);
      const hash = await bcrypt.hash(password, 10);
      await DataMapper.updatePassword(email, hash);
      res.status(200).json("Password updated");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  contactSupport: async (req, res, next) => {

    try {
      const { email, title, content } = req.body;
      const {error, result } = await DataMapper.getCollaboratorByEmail(email);
      if (error) {
        // si j'ai une erreur => next(error)
        next(error);
      }

      if (!result) {
        res.status(400).json("Le mail du collaborateur est introuvable");
      } else {
      
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: "immoprosoclock@gmail.com", 
        from: "immoprosoclock@gmail.com", 
        subject: email + " - " + title,
        text: content,
      };
      sgMail
        .send(msg) 
        .then(() => {
          res.status(200).json("Email envoyé");
        })
        .catch((error) => {
          console.error(error);
        });
      }

    } catch (error) {
      console.log(error);
    }
  },

};
  


export default supportController;
