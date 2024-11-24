const Cart = require("../models/Cart");
const Ticket = require("../models/Ticket");
const Product = require("../models/Product");

class CartService {
  async finalizePurchase(cartId) {
    const cart = await Cart.findById(cartId).populate("products.product");
    const unprocessedProducts = [];

    let totalAmount = 0;

    for (const item of cart.products) {
      const product = item.product;
      if (product.stock >= item.quantity) {
        product.stock -= item.quantity;
        totalAmount += product.price * item.quantity;
        await product.save();
      } else {
        unprocessedProducts.push(product._id);
      }
    }

    cart.products = cart.products.filter((item) =>
      unprocessedProducts.includes(item.product._id)
    );

    await cart.save();

    const ticket = await Ticket.create({
      code: `TCK-${Date.now()}`,
      amount: totalAmount,
      purchaser: cart.userEmail,
    });

    return { ticket, unprocessedProducts };
  }
}

module.exports = new CartService();
