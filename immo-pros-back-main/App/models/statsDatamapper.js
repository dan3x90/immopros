import client from "../services/client.js";
import APIError from "../services/APIError.js";


const statsDataMapper = {
    // Méthode pour récupérer toutes les actions d'une information
  
    async getCountOfInfoByCollaborator() {
      const sqlQuery = `
      SELECT * 
      FROM number_informations_by_collaborator
      `;  
      let result;
      let error;
  
      try {
        const response = await client.query(sqlQuery);
        result = response.rows
  
      } catch (err) {
        // je crèe une erreur 500
        error = new APIError("Erreur interne au serveur", 500, err);
        console.log(error);
      }
  
      // je retourne le résultat et l'erreur éventuelle
      return {
        error,
        result
      };
    },

    async getCountOfInfoBySector() {
      const sqlQuery = `
      SELECT * 
      FROM number_informations_by_sector
      `;  
      let result;
      let error;
  
      try {
        const response = await client.query(sqlQuery);
        result = response.rows
  
      } catch (err) {
        // je crèe une erreur 500
        error = new APIError("Erreur interne au serveur", 500, err);
        console.log(error);
      }
  
      // je retourne le résultat et l'erreur éventuelle
      return {
        error,
        result
      };
    },

    async getCollaboratorInfoBetweenDates(firstDate, secondDate) {
      const sqlQuery = `
      SELECT * FROM 
      getCollaboratorInfoBetweenDates($1, $2);
      `;
      const values = [firstDate, secondDate];
      let result;
      let error;
  
      try {
        const response = await client.query(sqlQuery, values);
        result = response.rows
  
      } catch (err) {
        // je crèe une erreur 500
        error = new APIError("Erreur interne au serveur", 500, err);
        console.log(error);
      }
  
      // je retourne le résultat et l'erreur éventuelle
      return {
        error,
        result
      };
    },
}

export default statsDataMapper;