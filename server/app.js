import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
//import recruiterRouter from "./routes/product.js";
import { pool } from "./database/db.js";

const app = express();

app.use(cors());

app.use(bodyParser.json());

dotenv.config();

const port = Number(process.env.PORT) || 4000;

//Routes
//app.use("/product", professionalRouter);

//Connect to elephantSQL
const connectDb = async () => {
  try {
    await pool.connect();
    console.log("Connect to Postgres");
  } catch (err) {
    console.log(err);
  }
};

app.listen(port, () => {
  connectDb();
  console.log(`Server running on port ${port}!`);
});
