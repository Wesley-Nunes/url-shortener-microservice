/*
 * TODO: Make the Post request
 *
 * DB schema: { id: int, url: String }
 *
 * 2  - Parse/validateShorutl the payload
 * 3  - Query the DB with the payload
 * 4  - |IF| found
 * 	a. assign the response variable with the DB data
 * 5  - |ELSE|
 * 	a. Save the url on the database
 * 	b. assign the response variable with the DB data
 * 6  - return the response variable to the client
 * */

/*
 * TODO SWR
 * */
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'dotenv/config';
import { validateShortUrl } from './validations.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors({ optionsSuccessStatus: 200 }));

app.post('/api/shorturl', validateShortUrl, (req, res) => {
	const response = { original_url: "", short_url: "" };

	console.log(req.body);

	res.send('ping /api/shorturl');
});

app.listen(port, () => console.log(`The app is listening on localhost:${port}`));
