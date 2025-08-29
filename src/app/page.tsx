// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// // Sample product data
// const products = [
//   { id: 1, name: "Luxury Rug 1", image: "/assets/hero.png", price: "$499" },
//   { id: 2, name: "Luxury Rug 2", image: "/assets/image3.png", price: "$599" },
//   { id: 3, name: "Luxury Rug 3", image: "/assets/image4.png", price: "$699" },
// ];

// export default function Home() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
      
//       {/* Static Navbar */}
//       <nav className={`fixed w-full z-50 transition-colors duration-500 ${scrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"}`}>
//         <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
//           <h1 className="text-2xl font-serif text-gold cursor-pointer">Luxury Rugs</h1>
//           <ul className="flex gap-6 font-semibold">
//             <li className="hover:text-gold transition-colors cursor-pointer">Home</li>
//             <li className="hover:text-gold transition-colors cursor-pointer">Shop</li>
//             <li className="hover:text-gold transition-colors cursor-pointer">Collections</li>
//             <li className="hover:text-gold transition-colors cursor-pointer">About</li>
//             <li className="hover:text-gold transition-colors cursor-pointer">Contact</li>
//           </ul>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative h-screen flex flex-col justify-center items-center text-center px-4">
//         <motion.h1
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-5xl md:text-6xl font-serif mb-4 "
//         >
//           Experience Luxury in Every Thread
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 1 }}
//           className="text-lg md:text-xl mb-8"
//         >
//           Premium Rugs & Interior Products for Your Home
//         </motion.p>
//         <motion.button
//           whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(255,215,0,0.7)" }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-yellow-600 text-black px-8 py-3 font-semibold rounded-full"
//         >
//           Shop Now
//         </motion.button>

//         {/* Floating decorative elements */}
//         <motion.div
//           className="absolute top-10 left-10 w-24 h-24 bg-yellow-600 rounded-full"
//           animate={{ y: [0, 20, 0] }}
//           transition={{ duration: 4, repeat: Infinity }}
//         />
//         <motion.div
//           className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-600 rounded-full"
//           animate={{ y: [0, -15, 0] }}
//           transition={{ duration: 5, repeat: Infinity }}
//         />
//       </section>

//       {/* Featured Products Section */}
//       <section className="py-20 px-4 md:px-16">
//         <h2 className="text-3xl md:text-4xl font-serif mb-10 text-center">Featured Rugs</h2>
//         <div className="flex overflow-x-auto gap-8">
//           {products.map((product, index) => (
//             <motion.div
//               key={product.id}
//               className="min-w-[250px] bg-[#111111] rounded-xl p-4 cursor-pointer hover:shadow-lg transition-shadow"
//               whileHover={{ scale: 1.05 }}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2 }}
//             >
//               <Image
//                 src={product.image}
//                 width={300}
//                 height={300}
//                 alt={product.name}
//                 className="rounded-xl mb-4"
//               />
//               <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
//               <p className="text-gold font-bold">{product.price}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Collections Section */}
//       <section className="py-20 px-4 md:px-16">
//         <h2 className="text-3xl md:text-4xl font-serif mb-10 text-center">Our Collections</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {["collection1", "collection2", "collection3"].map((col, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={{ scale: 1.05 }}
//               className="relative group cursor-pointer rounded-xl overflow-hidden"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.3 }}
//             >
//               <Image
//                 src={`/images/${col}.jpg`}
//                 width={400}
//                 height={300}
//                 alt={col}
//                 className="rounded-xl"
//               />
//               <motion.div
//                 className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
//               >
//                 <p className="text-white text-xl font-semibold">
//                   {col === "collection1" ? "Premium Rugs" : col === "collection2" ? "Interior Décor" : "Luxury Home"}
//                 </p>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-[#111111] py-12 text-center">
//         <p className="mb-4">&copy; 2025 Luxury Rugs. All Rights Reserved.</p>
//         <div className="flex justify-center gap-6 text-gold">
//           <a href="#"><i className="fab fa-instagram"></i></a>
//           <a href="#"><i className="fab fa-facebook"></i></a>
//           <a href="#"><i className="fab fa-pinterest"></i></a>
//         </div>
//       </footer>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const products = [
  { id: 1, name: "Luxury Rug 1", image: "/assets/prod1.jpg", price: "$499" },
  { id: 2, name: "Luxury Rug 2", image: "/assets/image7.jpg", price: "$599" },
  { id: 3, name: "Luxury Rug 3", image: "/assets/image8.jpeg", price: "$699" },
  { id: 4, name: "Luxury Rug 4", image: "/assets/image9.jpeg", price: "$499" },
  { id: 5, name: "Luxury Rug 5", image: "/assets/prod1.jpg", price: "$599" },
  { id: 6, name: "Luxury Rug 6", image: "/assets/image7.jpg", price: "$699" },
  { id: 7, name: "Luxury Rug 7", image: "/assets/image8.jpeg", price: "$499" },
  { id: 8, name: "Luxury Rug 8", image: "/assets/image9.jpeg", price: "$599" },
  { id: 9, name: "Luxury Rug 9", image: "/assets/image7.jpg", price: "$699" },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  // Set number of visible products based on screen width
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 640) setVisibleCount(2);
      else setVisibleCount(1);
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Scroll Motion Value
  const scrollY = useMotionValue(0);
  const parallaxY = useTransform(scrollY, [0, 500], [0, -100]); 
  const float1Y = useTransform(scrollY, [0, 500], [0, 30]); 
  const float2Y = useTransform(scrollY, [0, 500], [0, -20]); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      scrollY.set(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-colors duration-500 ${scrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
          <h1 className="text-xl sm:text-4xl font-serif text-yellow-200 cursor-pointer">Luxury Rugs</h1>
          <ul className="hidden sm:flex gap-4 md:gap-6 font-semibold text-sm md:text-base">
            {["Home", "Shop", "Collections", "About", "Contact"].map((item, idx) => (
              <li key={idx} className="hover:text-yellow-600 transition-colors cursor-pointer text-yellow-300">{item}</li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 overflow-hidden">
        {/* Hero Background with Entrance + Parallax */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ y: parallaxY }}
        >
          <Image
            src="/assets/image6.jpeg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>

        {/* Hero Text */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4 z-10 px-2"
        >
          Experience Luxury in Every Thread
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 z-10 px-2"
        >
          Premium Rugs & Interior Products for Your Home
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(255,215,0,0.7)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-600 text-black px-6 sm:px-8 py-2 sm:py-3 font-semibold rounded-full z-10 text-sm sm:text-base"
        >
          Shop Now
        </motion.button>
{/*  */}
      </section>


      {/* Featured Products Carousel */}
<section className="py-16 sm:py-20 px-4 sm:px-6 md:px-16 relative overflow-hidden ">
  {/* Animated Dots Background */}
  <motion.div
    className="absolute inset-0 z-0"
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    }}
  >
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-yellow-600 rounded-full"
        style={{
          width: Math.random() * 8 + 2 + "px",
          height: Math.random() * 8 + 2 + "px",
          top: Math.random() * 100 + "%",
          left: Math.random() * 100 + "%",
        }}
        animate={{ y: ["0px", `${Math.random() * 20 - 10}px`, "0px"], x: ["0px", `${Math.random() * 20 - 10}px`, "0px"] }}
        transition={{ repeat: Infinity, duration: 4 + Math.random() * 3, ease: "easeInOut" }}
      />
    ))}
  </motion.div>

  <h2 className=" bg-transparent text-2xl sm:text-3xl md:text-4xl font-serif mb-8 sm:mb-10  text-center text-yellow-200 relative z-10">
    Featured Rugs
  </h2>

  {/* Products Grid */}
  <div className="bg-transparent grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6relative z-10">
    {products.map((product) => (
      <motion.div
        key={product.id}
        className="rounded-3xl p-6 flex flex-col items-center cursor-pointer shadow-lg hover:scale-105 transition-transform"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={product.image}
          width={250}
          height={250}
          alt={product.name}
          className="rounded-xl mb-4 shadow-lg"
        />
        <h3 className="text-xl font-semibold mb-2 text-yellow-200">{product.name}</h3>
        <p className="text-gold font-bold">{product.price}</p>
      </motion.div>
    ))}
  </div>
</section>
      {/* Collections
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-8 sm:mb-10 text-center">Our Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {["collection1", "collection2", "collection3"].map((col, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.3 }}
            >
              <Image
                src="/assets/hero.png" 
                width={400}
                height={300}
                alt={col}
                className="rounded-xl"
              />
              <motion.div
                className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <p className="text-white text-base sm:text-xl font-semibold">
                  {col === "collection1" ? "Premium Rugs" : col === "collection2" ? "Interior Décor" : "Luxury Home"}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section> */}

    <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-16">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
    {/* Left Image */}
    <motion.div
      className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <Image
        src="/assets/image9.jpeg" // replace with your actual image
        width={600}
        height={400}
        alt="Interior Inspiration"
        className="object-cover rounded-3xl"
      />
    </motion.div>

    {/* Right Text */}
    <motion.div
      className="w-full lg:w-1/2 flex flex-col justify-center text-left"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-yellow-200 mb-4">
        Interior Inspiration
      </h2>
      <p className="text-white text-base sm:text-lg md:text-xl mb-6">
        Discover unique designs and luxurious interiors that transform your home into a masterpiece.  
        Premium rugs, furniture, and décor tailored to elevate your living space.
      </p>
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(255,215,0,0.7)" }}
        className="bg-yellow-600 text-black px-6 py-2 rounded-full font-semibold w-max text-sm sm:text-base"
      >
        Explore More
      </motion.button>
    </motion.div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-[#111111] py-12 text-center">
        <p className="mb-4 text-sm sm:text-base">&copy; 2025 Luxury Rugs. All Rights Reserved.</p>
        <div className="flex justify-center gap-4 sm:gap-6 text-gold text-sm sm:text-base">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-pinterest"></i></a>
        </div>
      </footer>
    </div>
  );
}