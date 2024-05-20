import User from '../models/user.js';
import pkg from 'jsonwebtoken';
import { compareSync } from 'bcrypt';

const AuthSecret = process.env.AUTH_SECRET
const { findByUsername, createUser, findById } = User

export async function login(req, res) {
    const { username, password } = req.body;
    const user = await findByUsername(username);
    if (!user || !compareSync(password, user.password)) {
        return res.status(401).send('Invalid username or password.');
    }
    const token = pkg.sign({ id: user.id }, AuthSecret, {expiresIn: "15m"});
    res.send({ token });
    req.session.token = token;
}

export async function register(req, res) {
    try {
        const user = await createUser(req.body);
        const token = pkg.sign({ id: user.id }, AuthSecret, {expiresIn: "15m"});
        res.status(201).send({ token });
        req.session.token = token;
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getCurrentUser(req, res) {
    try {
        const user = await findById(req.params.id);
        res.json(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

