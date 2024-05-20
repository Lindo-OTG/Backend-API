import request from 'supertest';
import { expect } from 'chai';
import app from '../server.js';

// Test suite for user endpoints
describe('User Endpoints', () => {
  // Test for GET request to /users endpoint
  it('should fetch all users', async () => {
    const res = await request(app)
      .get('/users')
      .send();
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('users');
  });

  // Test for POST request to /users endpoint
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        name: 'Test User',
        email: 'test@example.com'
      });
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('user');
  });
});
