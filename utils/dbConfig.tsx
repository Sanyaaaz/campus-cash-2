import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import dotenv from "dotenv";

// Load environment variables from a .env file
dotenv.config();

// Retrieve database connection URL from environment variables
const sql = neon(process.env.DATABASE_URL || ""); 

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in your environment variables.");
}

export const db = drizzle(sql, { schema });
