import sql from 'mssql';
import dotenv from "dotenv";

dotenv.config()

// Database Config
const config = {
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  options: {
    encrypt: false,
  },
};

export async function getDbRequest() {
  await sql.connect(config);
  return new sql.Request();
}