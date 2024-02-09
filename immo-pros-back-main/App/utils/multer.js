import multer from "multer";
import { v4 as uuidv4 } from 'uuid';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from './cloudinary.js';

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration de Multer avec Cloudinary comme système de stockage
const cloudinaryStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "immo'pros", // Remplacez par le dossier souhaité
      format: async (req, file) => 'webP', // Vous pouvez ajuster le format
    },
});

const upload = multer({
    storage: cloudinaryStorage,
    limits: {
      fileSize: 10 * 1024 * 1024, // Augmentez cette valeur si vous attendez de plus gros fichiers
    },
});

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.join(__dirname, "../../public/images"))
//     },
//     filename : (req, file, cb) => {
//         cb(null, uuidv4() + "-" + file.originalname)
//     },
// })

// const upload = multer({storage});

export default upload;