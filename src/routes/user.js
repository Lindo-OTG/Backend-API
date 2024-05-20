import { Router } from 'express';
import { login, register, getCurrentUser } from '../controllers/usersController.js';

const router = Router();

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: User Login
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       201:
 *         description: User Logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 */
router.post('/login', login);


/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new User
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 */
router.post('/register', register);


/**
 * @swagger
 * /users/me/{id}:
 *   get:
 *     summary: Get the current User
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the User to retrieve
 *     responses:
 *       200:
 *         description: Current User
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 */
router.get('/me/:id', getCurrentUser);

export default router;
