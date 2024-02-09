import jsonwebtoken from 'jsonwebtoken';

const isAuthMw = {
    // middleware pour vérifier si l'utilisateur est connecté via JSON Web Token:
    isAuth (req, res, next)  {
        if (!req.user) {
          res.status(401).json('<< 401 UNAUTHORIZED');
        } else {
          next();
        }
      }
}



export default isAuthMw;
