import dataMapper from "../models/authDatamapper.js";
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

const authController = {
    // Méthode pour connecter l'utilisateur
    login: async (req, res, next) => {
        const { email, password } = req.body;

        if(!email || !password) {
            res.json("Veuillez renseigner tous les champs !");
        }

        const { error, result, message } = await dataMapper.getUserByEmail(email);

        if (error) {
            // si j'ai une erreur => next(error)
            next(error);
        }

        if (message) {
            // si j'ai une erreur => next(error)
            res.status(401).json(message);
        }
        else {
    
            const passwordCorrect = await bcrypt.compare(password, result.password);

            if(!passwordCorrect) {
                res.status(401).json("Incorrect password or email.");
            } else {
                const jwtContent = {
                    resultId: result.id,
                    label: result.label        
                }
                const jwtOptions = {
                    algorithm: 'HS256',
                    expiresIn: '8h'
                };
                console.log(result.firstname + " connected");
                res.status(200).json({
                    logged: true,
                    result,
                    token: jsonwebtoken.sign(jwtContent, process.env.JWT_SECRET, jwtOptions)});
            }
        }
    },

     // Méthode pour déconnecter l'utilisateur
    logout: (_, res, next) => {
        res.status(204).json({ 
            logged: false,
            message: "Déconnexion réussie"
        });
    }
};

export default authController;
