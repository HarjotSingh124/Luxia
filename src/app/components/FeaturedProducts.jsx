// "use client";
// import Image from "next/image";

// const products = [
//   {
//     id: 1,
//     name: "Modern Beige Rug",
//     price: "$450",
//     image: "/assets/hero.png",
//   },
//   {
//     id: 2,
//     name: "Vintage Persian Rug",
//     price: "$1,200",
//     image: "/assets/prod1.png",
//   },
//   {
//     id: 3,
//     name: "Geometric Rug",
//     price: "$350",
//     image: "/assets/image3.png",
//   },
//   {
//     id: 4,
//     name: "Floral Patterned Rug",
//     price: "$500",
//     image: "/assets/image4.png",
//   },
// ];

// export default function FeaturedProducts() {
//   return (
//     <section className="max-w-7xl mx-auto px-6 py-20">
//       <h2 className="text-center text-3xl font-heading text-gold mb-12">
//         FEATURED PRODUCTS
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-dark p-4 rounded-2xl border border-gold/20 text-center shadow-lg hover:scale-105 transition-transform"
//           >
//             <div className="relative w-full h-64 mb-4">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 fill
//                 className="object-cover rounded-xl"
//               />
//             </div>
//             <h3 className="text-lg font-semibold text-gold">{product.name}</h3>
//             <p className="text-gray-300 mb-4">{product.price}</p>
//             <button className="border border-gold text-gold px-4 py-2 rounded-lg hover:bg-gold hover:text-dark transition-colors">
//               ADD TO CART
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Modern Beige Rug",
    price: "$450",
    image: "/assets/hero.png",
  },
  {
    id: 2,
    name: "Vintage Persian Rug",
    price: "$1,200",
    image: "/assets/prod1.png",
  },
  {
    id: 3,
    name: "Geometric Rug",
    price: "$350",
    image: "/assets/image3.png",
  },
  {
    id: 4,
    name: "Floral Patterned Rug",
    price: "$500",
    image: "/assets/image4.png",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-center text-3xl font-heading text-yellow-300 mb-12">
        FEATURED PRODUCTS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-dark p-4  rounded-2xl border border-yellow-300 text-center shadow-lg 
                       transition-all duration-500 hover:scale-105 
                       hover:shadow-[0_0_35px_8px_rgba(255,215,0,0.5)]"
          >
            <div className="relative w-full h-64 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h3 className="text-lg font-semibold text-yellow-200">{product.name}</h3>
            <p className="text-yellow-200 mb-4">{product.price}</p>
            <button className="border border-gold text-yellow-200 px-4 py-2 rounded-lg hover:bg-gold hover:text-dark transition-colors">
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}