const express = require('express');
const router = express.Router();

const { getAllProducts,
    getProductById
} = require('../controller/productConrollers');

// descripton - GET all products from db //
// route - GET /api/products //
// acesss - Public

router.get('/', getAllProducts);

// descripton - GET a product by id from db //
// route - GET /api/products/:id //
// acesss - Public

router.get('/:id', getProductById);

module.exports = router;