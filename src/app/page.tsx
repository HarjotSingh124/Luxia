"use client";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryShowcase from "./components/Categories";
import Footer from "./components/Footer";
import FeaturedProducts from "./components/FeaturedProducts";

export default function Page() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Category Showcase */}
      <CategoryShowcase />
      {/* Product Grid */}
<FeaturedProducts />
      {/* Footer */}
      <Footer />
    </main>
  );
}