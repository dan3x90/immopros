import debug from "debug";
import { appendFile } from "node:fs/promises";
import { join } from "node:path";
import APIError from "./APIError.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const errorHandler = {
    /**
     * Méthode de gestion d'erreur
     * @param {*} err
     * @param {*} req
     * @param {*} res
     * @param {*} next
     */
    async manage(err, req, res, next) {
        // j'écris dans le fichier de logs
        errorHandler.log(err);

        // j'informe l'utilisateur
        res.status(err.code).json({
            error: err.message
        });
    },
    /**
     * Méthode pour enregistrer les fichiers de logs
     * @param {*} err
     */
    async log(err) {
        const fileName = `${err.date.toISOString().slice(0, 10)}.log`;

        // console.log(__dirname);
        // chemin vers mon fichier de log
        const path = join(__dirname, `../../log/${fileName}`);
        console.log(fileName);

        /*
                Nous allons logguer le moment où est survenue l'erreur, le message de celle-ci, la stacktrace ainsi que le contexte (par exemple le endpoint de notre API qui a conduit à l'erreur)

                un endpoint au niveau d'une API correspond à une route
            */

        const time = err.date.toISOString().slice(11, -1);
        let errorMessage;
        if (err.error) {
            errorMessage = err.error.message;
        } else {
            errorMessage = err.message;
        }
        const text = `${time};${err.code};${errorMessage};${err.stack}\r\n`;
        // j'écris dans mon fichier de log
        await appendFile(path, text);
    },
    notFound(req, res, next) {
        const err = new APIError("Url not found !", 404);
        next(err);
    },
};

export default errorHandler;