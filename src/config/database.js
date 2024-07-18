import mongoose from 'mongoose';
import 'dotenv/config';

const connectDb = async () => {
	console.log('Connecting to the Database');
	try {
		await mongoose.connect(process.env.DB_URL);
		console.clear();
		console.log('Database connected');

	} catch (err) {
		console.error('Database connection failed:', err.message);
	}
};

export default connectDb;

