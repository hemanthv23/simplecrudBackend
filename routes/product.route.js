const express = require('express');
const router = express.Router();
const Product = require('../models/product.models.js');
const {
  getProducts,
  GetSpecific,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller.js');

router.get('/', getProducts);
router.get('/:id', GetSpecific);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
