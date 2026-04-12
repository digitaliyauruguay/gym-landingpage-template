"use client";
import { motion } from "framer-motion";
import { siteConfig } from "../config/site";
import { iconMap } from "../lib/icons";

export default function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-white">
      <div className="w-16 h-1 bg-[var(--primary)] mx-auto mb-6 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* TÍTULO */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            {siteConfig.branding.ourServices}
          </h2>
          <p className="mt-4 text-gray-600">
            {siteConfig.branding.servDescription}
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {siteConfig.services.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition duration-300 border border-gray-100"
              >
                {/* ICONO */}
                <div className="mb-4 text-[var(--primary)]">
                  {Icon && <Icon size={40} strokeWidth={1.5} />}
                </div>

                {/* TITULO */}
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[var(--primary)] transition">
                  {service.title}
                </h3>

                {/* DESCRIPCIÓN */}
                <p className="mt-3 text-gray-600 text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}