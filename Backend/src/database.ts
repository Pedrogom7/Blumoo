import { createConnection } from 'typeorm';
import { User } from './models/User';
import dotenv from 'dotenv';

dotenv.config();

export const connectDatabase = async () => {
    await createConnection({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || '5432'),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        entities: [User],
        synchronize: true,
    });
};
