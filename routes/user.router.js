const express = require("express");
const UserDTO = require("../dtos/UserDTO");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/current", authMiddleware, (req, res) => {
  const userDTO = new UserDTO(req.user);
  res.status(200).json(userDTO);
});

module.exports = router;
