const express = require("express");

const router = express.Router();

// receive a post request to add an item to a cart
router.post("/cart/products", (req, res) => {
  console.log(req.body.productId);

  res.send("PRODUCT ADDED TO CART");
});
// receive a get request to show all items in cart

// receive a post request nto delete an item from a cart

module.exports = router;
