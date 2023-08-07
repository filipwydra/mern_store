import express from "express";
import dotenv from "dotenv"
dotenv.config()
import products from "./data/products.js";

const port = process.env.PORT || 5000;

const app = express();

app.use(express.static('public'))

app.get("/api/products", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const product = products.find((item) => item._id === req.params.id);
  res.json(product);
});

app.listen(port, () => console.log(`Server on port ${port}`));
