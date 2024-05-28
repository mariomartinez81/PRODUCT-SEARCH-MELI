import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routerApi from './routes';
import { config } from './utils/constants';

const app = express();
const { PORT } = config;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log('Server is running on port', PORT));

routerApi(app);
