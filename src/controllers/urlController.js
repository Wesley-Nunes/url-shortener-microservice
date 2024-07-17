import Url from '../models/urlModel.js';

export const createShortUrl = async (req, res) => {
	const { url } = req.body;
	const queryUrl = await Url.findOne({ original_url: url });
	let response = { original_url: "", short_url: "" };

	if (queryUrl) {
		const { original_url, short_url } = queryUrl;
		response = { original_url, short_url };
	} else {
		const docs = await Url.find({});
		const nextShortUrl = docs.length + 1;
		const { original_url, short_url } = await Url.create(
			{ original_url: url, short_url: nextShortUrl }
		);
		response = { original_url, short_url };
	}

	res.json(response);
};

export const getShortUrl = async (req, res) => {
	const { short_url } = req.params;
	try {
		const urlEntry = await Url.findOne({ short_url });
		if (urlEntry) {
			res.redirect(urlEntry.original_url);
		} else {
			res.status(404).json({ "error": "No short URL found for the given input" });
		}
	} catch (err) {
		res.status(500).json({ error: 'Internal Server Error' });
	}
};

