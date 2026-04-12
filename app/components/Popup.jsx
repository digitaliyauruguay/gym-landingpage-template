"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function Popup() {
  const [open, setOpen] = useState(false);

  // ⏱️ aparece después de 8 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* POPUP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
          >
            <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative">

              {/* BOTÓN CERRAR */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>

              {/* CONTENIDO */}
              <h2 className="text-2xl font-bold text-gray-900">
                ¿Listo para empezar?
              </h2>

              <p className="mt-3 text-gray-600">
                Contactanos ahora y empezá a ver resultados cuanto antes.
              </p>

              {/* BOTONES */}
              <div className="mt-6 flex flex-col gap-3">

                {/* FORMULARIO */}
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="bg-[var(--primary)] text-white px-5 py-3 rounded-lg text-center hover:bg-[var(--primary-hover)] transition"
                >
                  Contactar por email
                </a>

                {/* WHATSAPP */}
                <a
                  href="https://wa.me/598123456789?text=Hola%20quiero%20info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 transition"
                >
                  <MessageCircle size={18} />
                  Enviar mensaje ahora
                </a>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}