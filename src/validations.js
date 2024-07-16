export const validateShortUrl = (req, res, next) => {
	const [k, v] = Object.entries(req.body).flat();
	const invalidBody = !req.body || typeof req.body !== 'object' || !k || !v;
	const invalidKey = typeof k !== 'string' || k !== 'url';
	const invalidValue = typeof v !== 'string';

	const invalidUrl = (url) => (!/^(https?:\/\/)((([a-zA-Z\d]([a-zA-Z\d-]*[a-zA-Z\d])*)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-zA-Z\d%_.~+]*)*(\?[;&a-zA-Z\d%_.~+=-]*)?(#[-a-zA-Z\d_]*)?$/.test(url));

	if (invalidBody) {
		return res
			.status(400)
			.json({ error: 'The request payload is missing.' });
	}
	if (invalidKey) {
		return res
			.status(422)
			.json({ error: 'Invalid payload: url key is required and must be a string.' });
	}
	if (invalidValue) {
		return res
			.status(422)
			.json({ error: 'Invalid payload: url value is required and must be a string.' });
	}
	if (invalidUrl(v)) {
		return res.status(422).json({ error: 'invalid url' });
	}

	next();
}

