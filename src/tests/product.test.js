import request from 'supertest';
import { expect } from 'chai';
import app from '../server.js';

describe('Products API', () => {
    it('should create a new product', async () => {
        const res = await request(app)
            .post('/products')
            .send({
                name: 'Test Product',
                description: 'This is a test product',
                price: 9.99
            });
        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('id');
    });

    it('should get a list of products', async () => {
        const res = await request(app).get('/products');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
    });

    it('should get a product by id', async () => {
        const res = await request(app).get('/products/1');
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('id');
    });

    it('should update a product', async () => {
        const res = await request(app)
            .put('/products/1')
            .send({
                name: 'Updated Product',
                description: 'This is an updated test product',
                price: 19.99
            });
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('id');
    });

    it('should delete a product', async () => {
        const res = await request(app).delete('/products/1');
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('message');
    });
});
