import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import viewRoutes from './routes/viewRoutes.js';
import urlRoutes from './routes/urlRoutes.js';

const app = express();
const __dirname = import.meta.dirname;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static(__dirname + '/views'));

app.use('/', viewRoutes);
app.use('/api', urlRoutes);

export default app;

