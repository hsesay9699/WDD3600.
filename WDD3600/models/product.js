/**
 * models/product.js
 * A simple Product model that saves/reads product data to/from a JSON file.
 * This follows the course tutorial approach (no database yet).
 */
const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

const p = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    try {
      cb(JSON.parse(fileContent));
    } catch (e) {
      cb([]);
    }
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products, null, 2), (err) => {
        if (err) console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
