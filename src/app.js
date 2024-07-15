/*
 * TODO: Make the Post request
 *
 * DB schema: { id: int, url: String }
 *
 *
 * 1  - Recognize when the endpoint is accessed
 * >>
 * 1a - Create the response variable: {original_url: "", "short_url": ""}
 * 2  - Parse/Sanitaze the payload
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
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ optionsSuccessStatus: 200 }));

app.post('/api/shorturl', (req, res) => {
	res.send('ping /api/shorturl');
});

app.listen(port, () => console.log(`The app is listening on localhost:${port}`));
