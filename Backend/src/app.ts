import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import { connectDatabase } from './database';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use('/api', userRoutes);

connectDatabase().then(() => {
    console.log("Connected to the database");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(error => console.log(error));

export default app;
