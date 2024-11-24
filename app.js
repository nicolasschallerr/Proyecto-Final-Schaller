const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const passport = require("./config/passportConfig");
const sessionRoutes = require("./routes/sessions");
const authMiddleware = require("../middlewares/authMiddleware");

require("dotenv").config();
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
const router = express.Router();

// Rutas
app.use("/api/sessions", sessionRoutes);

// Conectar a MongoDB
mongoose
  .connect("mongodb://localhost:27017/your_database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a la base de datos"))
  .catch((err) => console.log("Error al conectar a la base de datos", err));

router.post("/products", authMiddleware(["admin"]), createProduct);
router.post("/cart", authMiddleware(["user"]), addToCart);

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`));
