/**
 * controllers/products.js
 * Controller file for product-related logic.
 * The routes call these exported functions so that routes stay clean and focused.
 * (Required: add code comments for this file.)
 */
const Product = require('../models/product');

/**
 * GET /admin/add-product
 * Renders the page that shows the "Add Product" form.
 */
exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product'
  });
};

/**
 * POST /admin/add-product
 * Handles form submission and saves the product.
 */
exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const product = new Product(title);
  product.save();
  res.redirect('/');
};

/**
 * GET /
 * Renders the shop (product list) page.
 */
exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};
