import express from 'express';
import { createShortUrl, getShortUrl } from '../controllers/urlController.js';
import { validateShortUrl } from '../validators/urlValidator.js';

const router = express.Router();

router.post('/shorturl', validateShortUrl, createShortUrl);

router.get('/shorturl/:short_url', getShortUrl);

export default router;
