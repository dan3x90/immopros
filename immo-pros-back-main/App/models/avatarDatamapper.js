import client from "../services/client.js";
import APIError from "../services/APIError.js";

const avatarDatamapper = {
    // Méthode pour récuperer tous les avatars
    async getAllAvatars() {
        const sqlQuery = "SELECT * FROM avatar";

        let result;
        let error;

        try {
            // j'envoie ma requête à ma BDD
            const response = await client.query(sqlQuery);

            // je place la réponse dans result
            result = response.rows;
        }
        catch (err) {
            // je crèe une erreur 500
            error = new APIError("Erreur interne au serveur", 500, err);
        }

        // je retourne le résultat et l'erreur éventuelle
        return { error, result };
    },

    // Méthode pour récupérer un avatar par son id:
    async getAvatarById(avatarId) {
        const sqlQuery = "SELECT * FROM avatar WHERE id = $1";
        const values = [avatarId];

        let result;
        let error;

        try {
            const response = await client.query(sqlQuery, values);

            // je teste pour savoir si au moins une ligne a été retournée
            if (response.rows.length == 0) {
                // aucune catégorie n'a été trouvée
                error = new APIError("Aucun avatar n'a été trouvé", 404);
            }
            else {
                // je place la réponse dans result
                result = response.rows[0];
            }

        }
        catch (err) {
            // je crèe une erreur 500
            error = new APIError("Erreur interne au serveur", 500, err);
        }

        // je retourne le résultat et l'erreur éventuelle
        return { error, result };
    },
    
    // Méthode pour créer un avatar:
    async createAvatar(avatar) {
        const sqlQuery = `
                INSERT INTO avatar (
                    label,
                    url
                ) 
                VALUES ($1, $2) 
                RETURNING *;`;

        const values = [
            avatar.label,
            avatar.url
        ];

        let result;
        let error;

        try {
            const response = await client.query(sqlQuery, values);

            // je place la réponse dans result
            result = response.rows[0];
        }
        catch (err) {
            // je crèe une erreur 500
            error = new APIError("Erreur interne au serveur", 500, err);
        }

        // je retourne le résultat et l'erreur éventuelle
        return { error, result };
    },

    // Méthode pour mettre à jour un avatar:
    async updateAvatar(avatarId, data) {
        const sqlQuery = `
                UPDATE avatar 
                SET label = $1, url = $2
                WHERE id = $3
                RETURNING *;`;

        const values = [
            data.label,
            data.url,
            avatarId
        ];

        let result;
        let error;

        try {
            const response = await client.query(sqlQuery, values);

            // je place la réponse dans result
            result = response.rows[0];
        }
        catch (err) {
            // je crèe une erreur 500
            error = new APIError("Erreur interne au serveur", 500, err);
        }

        // je retourne le résultat et l'erreur éventuelle
        return { error, result };
    },

    // Méthode pour supprimer un avatar:
    async deleteAvatar(avatarId) {
        const sqlQuery = "DELETE FROM avatar WHERE id = $1";
        const values = [avatarId];

        let result;
        let error;
    
        try {
            const response = await client.query(sqlQuery, values);
            // je place la réponse dans result
            result = response.rows[0];
    
            if(response.rowCount === 0){
                error = new APIError("Aucun avatar n'a été supprimé", 404);
            }
        }
        catch (err) {
            // je crèe une erreur 500
            error = new APIError("Erreur interne au serveur", 500, err);
        }
    
        // je retourne le résultat et l'erreur éventuelle
        return { error, result };
    },

    // Méthode pour télécharger un avatar:
    async downloadAvatard(filename, path) {
        const sqlQuery =  `
        INSERT INTO avatar (
            label,
            url
        ) 
        VALUES ($1, $2) 
        RETURNING *;`;
        const values = [filename, path];

        let result;
        let error;
    
        try {
            const response = await client.query(sqlQuery, values);
            // je place la réponse dans result
            result = response.rows[0];
    
        }
        catch (err) {
            // je crèe une erreur 500
            error = new APIError("Erreur interne au serveur", 500, err);
        }
    
        // je retourne le résultat et l'erreur éventuelle
        return { error, result };
    },
}

export default avatarDatamapper;
