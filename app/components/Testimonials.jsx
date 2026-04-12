"use client";
import { motion } from "framer-motion";
import { siteConfig } from "../config/site";

export default function Testimonials() {

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="w-16 h-1 bg-[var(--primary)] mx-auto mb-6 rounded-full"></div>
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            {siteConfig.testimonials.title}
          </h2>
          <p className="mt-4 text-gray-600">
            {siteConfig.testimonials.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {siteConfig.testimonials.items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <p className="text-gray-600 italic">
                “{t.text}”
              </p>

              <h4 className="mt-4 font-semibold text-gray-800">
                {t.name}
              </h4>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}