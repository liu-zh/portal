import Link from "next/link";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-6 py-4 bg-blue-500 text-white shadow-md">
        <h1 className="text-xl font-bold">Namtcho Furniture</h1>
        <div className="flex gap-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About us</Link>
          <button
            onClick={() => setShowModal(true)}
            className="hover:underline"
          >
            Contact us
          </button>
        </div>
      </nav>
      <ContactModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
