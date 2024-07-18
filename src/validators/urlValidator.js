import dns from 'node:dns';

export const validateShortUrl = async (req, res, next) => {
	const [urlKey, urlValue] = Object.entries(req.body).flat();
	const invalidBody = !req.body || typeof req.body !== 'object' || !urlKey || !urlValue;
	const invalidKey = typeof urlKey !== 'string' || urlKey !== 'url';
	const invalidValue = typeof urlValue !== 'string';

	const invalidUrl = async (urlValue) => {
		try {
			const url = new URL(urlValue);
			const hostname = url.hostname;

			await new Promise((resolve, reject) => {
				dns.lookup(hostname, (err, address) => {
					if (err) {
						reject(err);
					} else {
						resolve(address);
					}
				});
			});

			return false;
		} catch (e) {
			return true;
		}
	};

	if (invalidBody) {
		return res
			.status(400)
			.json({ error: 'The request payload is missing.' });
	}
	/*
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
	*/
	if (await invalidUrl(urlValue) || invalidValue || invalidKey) {
		return res.status(422).json({ error: 'invalid url' });
	}

	next();
}

