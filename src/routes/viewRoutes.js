
import express from 'express';
import { renderIndex } from '../controllers/viewController.js';

const router = express.Router();

router.get('/', renderIndex);

export default router;
