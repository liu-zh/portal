import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto space-y-6">
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">About Our Company</h2>
          <p>
            Namtcho Furniture specializes in modern, durable and comfortable dining chairs.
            We combine craftsmanship with contemporary design to provide customers worldwide
            with stylish furniture solutions.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
          <p>Email: namtchofurniture.gmail.com</p>
          <p>Phone: (86)13702297880</p>
          <p>Address: No.18 St. YangLou XiQing District Tianjin City,China</p>
        </section>
      </div>
    </Layout>
  );
}
