import sql from "../../lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, phone } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ error: "Missing name or phone" });
    }

    try {
      const result = await sql`
        INSERT INTO contacts (name, phone)
        VALUES (${name}, ${phone})
        RETURNING *
      `;
      return res.status(201).json(result[0]);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Database insert failed" });
    }
  }

  if (req.method === "GET") {
    try {
      const rows = await sql`SELECT * FROM contacts ORDER BY created_at DESC`;
      return res.status(200).json(rows);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Database fetch failed" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
