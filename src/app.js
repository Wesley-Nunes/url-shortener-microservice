import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import urlRoutes from './routes/urlRoutes.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ optionsSuccessStatus: 200 }));

app.use('/api', urlRoutes);

export default app;

