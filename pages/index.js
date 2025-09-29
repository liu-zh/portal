import { useState, useEffect } from "react";

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({ name: "", phone: "" });

  async function fetchContacts() {
    const res = await fetch("/api/contacts");
    const data = await res.json();
    setContacts(data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm({ name: "", phone: "" });
      fetchContacts();
    } else {
      alert("提交失败！");
    }
  }

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div style={{ maxWidth: 500, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>客户联系方式</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="姓名"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="电话"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
        />
        <button type="submit">提交</button>
      </form>

      <ul>
        {contacts.map((c) => (
          <li key={c.id}>
            {c.name} - {c.phone} ({new Date(c.created_at).toLocaleString()})
          </li>
        ))}
      </ul>
    </div>
  );
}
