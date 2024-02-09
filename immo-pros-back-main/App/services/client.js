import dotenv from 'dotenv';
import pkg from 'pg';

dotenv.config();

const { Client } = pkg;

const client = new Client(process.env.PG_URL);

client.connect();

export default client;
