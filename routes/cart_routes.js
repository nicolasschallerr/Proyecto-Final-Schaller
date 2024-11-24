const express = require("express");
const CartService = require("../services/CartService");
const router = express.Router();

router.post("/:cid/purchase", async (req, res) => {
  try {
    const { cid } = req.params;
    const result = await CartService.finalizePurchase(cid);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error processing purchase", error });
  }
});

module.exports = router;
