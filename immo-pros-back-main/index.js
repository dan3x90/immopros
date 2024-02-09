import dotenv from "dotenv";
import express from "express";
import router from "./App/router/router.js";
import cors from "cors";
import jsonwebtoken from "jsonwebtoken";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Config Socket.io et server:
const server = http.createServer(app);
const io = new SocketIOServer(server, {
    cors: {
        origin: ["https://immopros-app.com", "http://localhost:3000", "http://localhost:3001"],
        methods: ["GET", "POST", "DELETE", "PUT"]
    }
});


const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Immo-Pros",
            version: "1.0.0",
            description: "Une API pour servir les données de notre base de données Immo-Pros",
        },
        servers: [{
            url: "https://immopros-api-e940e6a7183e.herokuapp.com/",
        }],
    },
    apis: [
        "./App/router/*.js",
        "./App/models/*.js",
        "./App/controllers/*.js",
        "./App/middlewares/*.js",
        "./App/*.js",
        "./App/service/*.js",
    ],
};

const specs = swaggerJSDoc(options);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(express.static(path.join(__dirname, "../public/images")))

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: ["https://immopros-app.com", "http://localhost:3000", "http://localhost:3001"]}));


app.use((req, _, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
        const token = authorization.split(" ")[1];
        try {
            const jwtContent = jsonwebtoken.verify(token, process.env.JWT_SECRET);
            req.user = jwtContent;
        } catch (err) {
            console.log("Invalid token", err);
        }
    }
    next();
});

// Middleware pour lier socket.io à la requête.
app.use((req, _, next) => {
    req.io = io;
    next();
});

// Connection au serveur par la socket io lors du set en front
 io.on('connection', (socket) => {
    console.log('Un client est connecté');

    // ecoute du join room envoyé du front pour rejoindre la room
    socket.on('join_room', (data) => {
        if (data.room && typeof data.room === 'string') {
            // On rejoint la room
            socket.join(data.room);
            console.log(`Un utilisateur a rejoint la salle : ${data.room}`);
        } else {
            console.error('Error: Invalid room identifier provided.');
            socket.emit('error', 'Error: Invalid room identifier provided.');
        }
    });

    // ecoute du message envoyé du front envoie/delete et emit.refresh
    socket.on('updateOnMessage', (data) => {
        if (data.room && typeof data.room === 'string') {
            console.log(`Un utilisateur a envoyé un message dans la salle : ${data.room}`);
            // Emit du refresh vers le room concernée
            socket.to(String(data.room)).emit('refresh', data);
        } else {
            console.error('Error: Invalid room identifier provided.');
            socket.emit('error', 'Error: Invalid room identifier provided.');
        }
    });

    // ecoute du leave room envoyé du front pour quitter la room
    socket.on('leave_room', (data) => {
        if (data.room && typeof data.room === 'string') {
            // On quitte la room
            socket.leave(data.room);
            console.log(`Un utilisateur a quitté la salle : ${data.room}`);
        } else {
            console.error('Error: probleme leave room.');
            socket.emit('error', 'Error: probleme leave room.');
        }
    });

    // ecoute du disconnect envoyé du front pour quitter la room
    socket.on('disconnect', () => {
        socket.removeAllListeners();
        socket.disconnect(true);
    });
}); 

app.use(router);

app.use((err, _, res, next) => {
    if (err.name === "UnauthorizedError") {
        console.log("<< 401 UNAUTHORIZED - Invalid Token");
        res.status(401).send("Invalid token");
    } else if (err.message === "Not found") {
        console.log("<< 404 NOT FOUND");
        res.status(404).send("Not found");
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
