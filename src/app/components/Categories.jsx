'use client';
import Image from "next/image";
const cats = [
  { title: "Luxury Rugs", img: "/assets/hero.png" },
  { title: "Handmade Carpets", img: "/assets/image4.png" },
  { title: "Premium Interiors", img: "/assets/prod1.png" },
];

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-center font-heading text-3xl text-yellow-300 mb-8">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {cats.map((c) => (
          <div key={c.title} className="relative group overflow-hidden rounded-lg border border-transparent hover:border-gold transition">
            <Image src={c.img} alt={c.title} width={800} height={600} className="object-cover w-full h-64 group-hover:scale-105 transition-transform" />
            <div className="absolute inset-0 flex items-end p-6">
              <div className="bg-black/40 backdrop-blur-sm rounded-md px-4 py-2 text-yellow-200 font-medium">{c.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}