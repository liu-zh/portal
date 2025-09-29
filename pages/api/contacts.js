import sql from "../../lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, phone } = req.body;
    if (!name || !phone) return res.status(400).json({ error: "Missing data" });

    try {
      const existing = await sql`SELECT * FROM contacts WHERE name = ${name}`;
      if (existing.length > 0) {
        return res.status(400).json({ error: "Name already exists" });
      }

      const result = await sql`
        INSERT INTO contacts (name, phone)
        VALUES (${name}, ${phone})
        RETURNING *
      `;
      return res.status(201).json(result[0]);
    } catch (err) {
      console.error("Insert failed:", err);
      return res.status(500).json({ error: "Database insert failed" });
    }
  }

  if (req.method === "GET") {
    try {
      const rows = await sql`SELECT * FROM contacts ORDER BY created_at DESC`;
      return res.status(200).json(rows);
    } catch (err) {
      return res.status(500).json({ error: "Database fetch failed" });
    }
  }
}
