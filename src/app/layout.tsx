// app/layout.jsx
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";

// configure fonts (these get downloaded and optimized by Next)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-heading",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Luxia Rugs",
  description: "Luxury Rugs & Interiors",
};

export default function RootLayout({  }) {
  return (
    // add the variables class to html so the CSS vars are available
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#0a0a0a] text-lux-cream font-body">
      
      </body>
    </html>
  );
}