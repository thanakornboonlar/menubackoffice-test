import { Router } from "express";
import { pool } from "../database/db";

const productRouter = Router();

productRouter.get("/", (req, res) => {
  res.send("GET all products");
});

productRouter.get("/products/:id", (req, res) => {
  res.send(req.params.bookId);
});

productRouter.delete("/products/:id", function (req, res) {
  const { id } = req.params;
  res.send(`Delete record with id ${id}`);
});
