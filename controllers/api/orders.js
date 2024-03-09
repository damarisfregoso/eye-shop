const Order = require('../../models/order');
// const Item = require('../../models/item');

module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
  getAllForUser
};

async function cart(req, res) {
  // A cart is the unpaid order for a user
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}

// Add an item to the cart
async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.addItemToCart(req.params.id)
  res.json(cart);
}

// Updates an item's qty in the cart
async function setItemQtyInCart(req, res) {

}

// Update the cart's isPaid property to true
async function checkout(req, res) {

}

async function getAllForUser(req, res) {

}