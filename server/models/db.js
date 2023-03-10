import * as pg from "pg";
import dotenv from "dotenv";
const { Pool } = pg.default;

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export { pool };
// user: process.env.PG_USER,
// host: process.env.PG_HOST,
// database: process.env.PG_DATABASE,
// password: process.env.PG_PASSWORD,
// port: process.env.PG_PORT,
