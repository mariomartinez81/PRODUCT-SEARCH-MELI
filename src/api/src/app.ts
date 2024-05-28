import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routerApi from './routes';
import { errorHandler } from './middlewares/errorHandler';

export const app = express();

app.use(express.json());
app.use(cors());
app.use(errorHandler);

routerApi(app);
