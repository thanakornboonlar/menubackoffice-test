import { Router } from "express";
import { pool } from "../models/db.js";

export const menuRouter = Router();

menuRouter.get("/", async (req, res) => {
  try {
    const result = await pool.query(`select * from menus`);
    const menu = result.rows;
    return res.status(200).json({
      message: "GET All Menu Successfully",
      data: menu,
    });
  } catch (error) {
    console.log(error);
  }
});
