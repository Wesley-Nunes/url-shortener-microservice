import app from './app.js';
import connectDb from './config/database.js';
import 'dotenv/config';

const port = process.env.PORT || 3000;

await connectDb();

app.listen(port, () => console.log(`The app is listening on localhost:${port}`));

