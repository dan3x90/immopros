import client from "../services/client.js";
import APIError from "../services/APIError.js";

const authDatamapper = {
    getUserByEmail: async (email) => {
        const sqlQuery =  `
        SELECT
            c.id AS collaborator_id,
            c.*,
            r.id AS role_id,
            r.label AS label,
            a.id AS avatar_id,
            a.label AS avatar_label,
            a.url AS url,
            s.id AS sector_id,
            s.color_code,
            s.city,
            s.code_zip
        FROM
            collaborator c
        JOIN
            role r ON c.role_id = r.id
        JOIN
            avatar a ON c.avatar_id = a.id
        LEFT JOIN
            sector s ON c.id = s.collaborator_id
        WHERE c.email = $1;`

        const values = [email];

        let result;
        let error;
        let message;

        try {
            const response = await client.query(sqlQuery, values);

            // je teste pour savoir si au moins une ligne a été retournée
            if (response.rows.length == 0) {
                // aucune catégorie n'a été trouvée
                message = "Aucun compte n'a été trouvé";
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
        return { error, result, message };
    },
}

export default authDatamapper;
