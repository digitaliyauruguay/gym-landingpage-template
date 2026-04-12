"use client";
import { motion } from "framer-motion";
import { siteConfig } from "../config/site";
import { useEffect, useState } from "react";

export default function Hero() {
  
  const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) =>
      prev === siteConfig.hero.images.length - 1 ? 0 : prev + 1
    );
  }, 5000); // cambia cada 5 segundos

  return () => clearInterval(interval);
}, []);
  
  
  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* TEXTO */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            {siteConfig.hero.title}
            <span className="text-[var(--primary)]"> {siteConfig.hero.highlight}</span>
          </h1>

          <p className="mt-4 text-sm uppercase tracking-widest text-[var(--primary)] font-medium">
            {siteConfig.hero.subtitle}
</p>

          <p className="whitespace-pre-line mt-6 text-lg text-gray-600">
            {siteConfig.hero.description}
          </p>

          {/* BOTONES */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="bg-[var(--primary)] text-white px-8 py-4 text-lg rounded-lg shadow-md hover:bg-[var(--primary-hover)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-bounce"
            >
              {siteConfig.hero.cta}
            </a>

            <a
              href="#servicios"
              className="border border-[var(--primary)] text-[var(--primary)] px-8 py-4 text-lg rounded-lg hover:bg-white-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {siteConfig.hero.secondaryCta}
            </a>
          </div>

          {/* MINI BENEFICIOS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-6 text-sm text-gray-500">
            <span>{siteConfig.hero.miniBen1}</span>
            <span>{siteConfig.hero.miniBen2}</span>
            <span>{siteConfig.hero.miniBen3}</span>
            
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-6 text-sm text-´">
            <p className="mt-6 text-lg text-[var(--primary)]">
            
            {siteConfig.hero.socialTest}
            </p>
            
          </div>
        </motion.div>

        {/* IMAGEN */}
        <motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="relative"
>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-[var(--primary)] rounded-full blur-2xl opacity-50"></div>

          <div className="relative w-full h-[400px] overflow-hidden rounded-2xl shadow-lg">
  {siteConfig.hero.images.map((img, index) => (
    <img
      key={index}
      src={img}
      alt={siteConfig.hero.altImage}
      className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
        index === currentIndex ? "opacity-100" : "opacity-0"
      }`}
    />
  ))}
</div>
        </motion.div>

      </div>
    </section>
  );
}