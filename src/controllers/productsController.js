import Product from '../models/product.js';

export async function createProduct(req, res) {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function getProducts(req, res) {
    try {
        const products = await Product.getProducts();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function getProduct(req, res) {
    try {
        const product = await Product.getProduct(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function updateProduct(req, res) {
    try {
        const product = await Product.updateProduct(req.params.id, req.body);
        if (product) {
            res.status(200).json(product)                     
        } else {
            res.status(404).json({ message: 'Product not found' }); 
        }
        
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function deleteProduct(req, res) {
    try {
        const product = await Product.deleteProduct(req.params.id);
        if (product) {
            res.json({ message: 'Product deleted' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
