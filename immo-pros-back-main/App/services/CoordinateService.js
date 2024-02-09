import APIError from "./APIError.js";

const coordinateService = {
    getAdressCoordinate: async (adresse) => {
        let error;
        let latitude;
        let longitude;

        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${adresse}&format=json&limit=1`);
            const data = await response.json();
            if (data.length > 0) {
                longitude = parseFloat(data[0].lon);  
                latitude = parseFloat(data[0].lat);
            } else {
                longitude = 2.2944920270661333;
                latitude = 48.858384188817254;
            }
        } catch (err) {
            // je crée une erreur 500
            error = new APIError("Erreur lors de la récupération des coordonnées", 404, err);
        }

        return {
            error,
            longitude,
            latitude  
        };
    }
}

export default coordinateService;
