import { motion } from "framer-motion";

const benefits = [
  "Mayor claridad mental",
  "Mejor gestión emocional",
  "Reducción de ansiedad",
  "Relaciones más sanas",
  "Mayor bienestar personal",
];

export default function BenefitsSection() {
  return (
    <section className="py-20 px-6 bg-[#F5F1EB] overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h4 className="text-[#8F9F78] uppercase tracking-widest text-sm mb-3">
            Resultados reales
          </h4>

          <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-4">
            Notarás la diferencia
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            No es solo hablar. Es transformar cómo te sientes, piensas y vives tu día a día.
          </p>
        </motion.div>

<div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#F5F1EB] to-transparent z-10"></div>
<div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#F5F1EB] to-transparent z-10"></div>
        {/* CARRUSEL */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }}
          >
            {[...benefits, ...benefits].map((item, i) => (
              <div
                key={i}
                className="min-w-[250px] bg-white rounded-2xl shadow-md px-6 py-5 flex items-center justify-center"
              >
                <span className="text-[#1E3A5F] font-medium text-center">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}