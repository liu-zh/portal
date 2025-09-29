import Layout from "../components/Layout";

const products = [
  { id: 1, img: "/chair1.png", desc: "Modern wooden dining chair" },
  { id: 2, img: "/chair2.png", desc: "Classic leather dining chair" },
  { id: 3, img: "/chair3.png", desc: "Minimalist fabric chair" },
  // 可以继续添加图片
];

export default function Home() {
  return (
    <Layout>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {products.map((p) => (
          <div key={p.id} className="relative group break-inside-avoid">
            <img
              src={p.img}
              alt={p.desc}
              className="w-full rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-black/50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transition">
              <p className="text-center px-2">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
