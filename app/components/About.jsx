"use client";
import { motion } from "framer-motion";
import { siteConfig } from "../config/site";

export default function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-gray-50">
      <div className="w-16 h-1 bg-[var(--primary)] mx-auto mb-6 rounded-full"></div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGEN */}
        <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
        >
          <img
            src={siteConfig.about.image}
            alt={siteConfig.about.altImage}
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
/>
        </motion.div>

        {/* TEXTO */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            {siteConfig.about.title}
          </h2>

          <p className="mt-6 text-gray-600">
            {siteConfig.about.sub1}
          </p>

          <p className="mt-4 text-gray-600">
            {siteConfig.about.sub2}
          </p>

          {/* BENEFICIOS */}
          <div className="mt-6 flex flex-col gap-3 text-gray-700">
            <span>{siteConfig.about.miniBen1}</span>
            <span>{siteConfig.about.miniBen2}</span>
            <span>{siteConfig.about.miniBen3}</span>
          </div>

          {/* CTA SUAVE */}
          <a
            href="#contacto"
            className="inline-block mt-8 bg-[var(--primary)] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[var(--primary-hover)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {siteConfig.about.cta}
          </a>
        </motion.div>

      </div>
    </section>
  );
}