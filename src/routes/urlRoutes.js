import express from 'express';
import { createShortUrl } from '../controllers/urlController.js';
import { validateShortUrl } from '../validators/urlValidator.js';

const router = express.Router();

router.post('/shorturl', validateShortUrl, createShortUrl);

export default router;
