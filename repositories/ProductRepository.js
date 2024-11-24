const productDAO = require("../daos/ProductDAO");

class ProductRepository {
  async getAllProducts() {
    return await productDAO.getAll();
  }

  async getProductById(id) {
    return await productDAO.getById(id);
  }

  async createProduct(productData) {
    return await productDAO.create(productData);
  }

  async updateProduct(id, productData) {
    return await productDAO.update(id, productData);
  }

  async deleteProduct(id) {
    return await productDAO.delete(id);
  }
}

module.exports = new ProductRepository();
