import { useState } from "react";

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "保存失败");
      } else {
        alert("保存成功！");
        setForm({ name: "", phone: "" });
        onClose();
      }
    } catch (err) {
      setError("网络错误");
    }
  }

  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-bold mb-4">Leave your contact</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border p-2 w-full rounded"
            required
          />
          <input
            type="text"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="border p-2 w-full rounded"
            required
          />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-3 py-1 bg-gray-300 rounded">
              Cancel
            </button>
            <button type="submit" className="px-3 py-1 bg-blue-500 text-white rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
