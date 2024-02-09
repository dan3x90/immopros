/**
 * On implémente notre propre type d'erreur.
 * Cela s'appelle une exception
 * On en profite pour lui permettre de prendre
 * des informations supplémentaires, par exemple : un code de status HTTP
 * Les instances transporteront ces infos avec elles
 * et elles pourront être exploitées ultérieurement
 * @typedef {object} ApiError
 * @property {string} message - Error message
 * @property {string} name - Error name
 * @property {object} infos - Additionnal informations
 */
class APIError extends Error{
    constructor(message,code,err){
        // j'appelle le constructeur du parent
        super(message);

        // une erreur est-elle passée au constructeur ?
        if(err){
            this.error = err;
        }
        this.code = code;
        this.date = new Date();
    }
}

export default APIError;