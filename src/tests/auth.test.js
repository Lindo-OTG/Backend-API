import { expect } from 'chai';
import request from 'supertest';
import express, { json } from 'express';
import authMiddleware from '../middleware/auth.js';
import jsonwebtoken from 'jsonwebtoken';

describe('Auth Middleware', () => {
  let server;
  let user;

  beforeEach(() => {
    server = express();
    server.use(json());
    server.use(authMiddleware);
    server.get('/', (req, res) => res.status(200).send(req.user));

    user = { id: 1, name: 'Test User' };
  });

  it('should return 401 if no token is provided', async () => {
    const res = await request(server).get('/');
    expect(res.status).to.equal(401);
  });

  it('should return 400 if token is invalid', async () => {
    const res = await request(server).get('/').set('x-auth-token', 'invalid token');
    expect(res.status).to.equal(400);
  });

  it('should return 200 and the user object if token is valid', async () => {
    const token = jsonwebtoken.sign(user, process.env.AUTH_SECRET);
    const res = await request(server).get('/').set('x-auth-token', token);
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal(user);
  });
});
