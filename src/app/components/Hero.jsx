"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 -z-10 bg-[url('/assets/texture-dark.jpg')] bg-cover bg-center opacity-80"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                 <div className="text-left">
            <h1 className="font-heading text-5xl md:text-6xl leading-tight text-yellow-200">LUXURY RUGS & INTERIORS</h1>
            <p className="mt-4 text-lg text-yellow-200 max-w-xl">Transforming spaces with elegance — handcrafted rugs and curated interiors for refined homes.</p>
            <div className="mt-8">
              <a href="#shop" className="inline-block px-8 py-3 border border-yellow-200 rounded-lg text-sm font-medium tracking-wide hover:bg-text-yellow-600 transition text-yellow-200">SHOP NOW</a>
            </div>
          </div>
          

          {/* Image + roll-out wrapper */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="w-[820px] max-w-full relative overflow-hidden">
              {/* Mask that animates — the carpet roll effect */}
              <div className="roll-mask origin-left animate-roll">
                <Image
                  src ='/assets/image3.png'
                  alt="Luxury rug in living room"
                  width={1020}
                  height={820}
                  className="object-cover w-full h-full"
                />

           
              </div>

              {/* Optional shadow under rug to emphasize */}
              <div className="absolute left-6 right-6 bottom-6 h-10 rounded-t-lg bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .roll-mask {
          clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
        }
        @keyframes rollIn {
          0% {
            clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
            transform: translateX(-20px) rotate(-2deg);
            opacity: 0;
          }
          60% {
            clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
            transform: translateX(-6px) rotate(-1deg);
            opacity: 1;
          }
          100% {
            clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0 100%);
            transform: translateX(0) rotate(0deg);
            opacity: 1;
          }
        }
        .animate-roll {
          animation: rollIn 1.2s cubic-bezier(.2,.9,.2,1) forwards;
        }
      `}</style>
    </section>
  );
}