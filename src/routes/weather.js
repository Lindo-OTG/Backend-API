import { Router } from 'express';
import { getCurrentWeather } from '../controllers/weatherController.js';

const router = Router();


/**
 * @swagger
 * /weather/{city}:
 *   post:
 *     summary: Current Weather for City
 *     tags: [Weather]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Weather'
 *     responses:
 *       201:
 *         description: Current Weather
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Weather'
 */
router.get('/:city', getCurrentWeather);

export default router;