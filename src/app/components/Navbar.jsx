// "use client";
// import Link from "next/link";
// import { useState } from "react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="w-full border-b border-transparent">
//       <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center gap-4">
//           <Link 
//             href="/" 
//             className="font-heading text-2xl text-yellow-100 tracking-widest"
//           >
//             LUXIA
//           </Link>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-8 text-sm">
//           <Link href="/" className="hover:text-yellow-600 transition text-yellow-200">Home</Link>
//           <Link href="/shop" className="hover:text-yellow-600 transition text-yellow-200">Shop</Link>
//           <Link href="/about" className="hover:text-yellow-600 transition text-yellow-200">About</Link>
//           <Link href="/contact" className="hover:text-yellow-600 transition text-yellow-200">Contact</Link>
//         </div>

//         {/* Right side buttons */}
//         <div className="flex items-center gap-4">
//           <button 
//             aria-label="search" 
//             className="text-sm hidden md:block hover:text-yellow-600 transition text-yellow-200"
//           >
//             Search
//           </button>
//           <button 
//             aria-label="cart" 
//             className="p-2 rounded border border-transparent hover:border-text-yellow-600 transition text-yellow-200"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" 
//               viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
//               <path strokeLinecap="round" strokeLinejoin="round" 
//                 d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 6M7 13l-2 7m12-7l2 7M10 21h.01M18 21h.01" 
//               />
//             </svg>
//           </button>

//           {/* Mobile menu toggle */}
//           <div className="md:hidden">
//             <button 
//               onClick={() => setOpen(!open)} 
//               aria-expanded={open} 
//               className="p-2"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" 
//                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile links */}
//       {open && (
//         <div className="md:hidden bg-[rgba(0,0,0,0.9)]">
//           <div className="px-6 py-4 flex flex-col gap-3">
//             <Link href="/" className="block hover:text-gold transition text-yellow-600">Home</Link>
//             <Link href="/shop" className="block hover:text-gold transition text-yellow-60">Shop</Link>
//             <Link href="/about" className="block hover:text-gold transition">About</Link>
//             <Link href="/contact" className="block hover:text-gold transition">Contact</Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-transpaent shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-widest text-yellow-200">
          LUXIA
        </Link>

        {/* Menu */}
        <div className="flex gap-8">
          {["Home", "Shop", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="relative text-lg font-medium text-yellow-200 group"
            >
              {item}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[1.5px] bg-black transition-all duration-500 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}