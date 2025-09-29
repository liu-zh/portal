import { neon } from "@neondatabase/serverless";

console.error("database url: " + process.env.DATABASE_URL)
const sql = neon(process.env.DATABASE_URL); 
// DATABASE_URL 由 Vercel 自动注入

export default sql;
