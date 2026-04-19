import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function PlanesSection() {
  const services = [
    {
      id: 1,
      title: "Sesión de claridad",
      subtitle: "1 sesión",
      description: "Ordena tu mente y entiende qué está pasando contigo.",
      includes: [
        "Evaluación emocional profunda",
        "Contención inmediata",
        "Ruta terapéutica clara",
      ],
    },
    {
      id: 2,
      title: "Proceso raíz",
      subtitle: "2 sesiones",
      description: "Trabaja directamente sobre el origen de lo que sientes.",
      includes: [
        "2 sesiones estructuradas",
        "Seguimiento entre sesiones",
        "Ejercicios personalizados",
      ],
    },
    {
      id: 3,
      title: "Experiencia SER",
      subtitle: "Plan mensual",
      description: "Acompañamiento continuo para transformación real.",
      includes: [
        "4 sesiones al mes",
        "Espacios grupales",
        "Prioridad en agenda",
        "Seguimiento premium",
      ],
      featured: true,
    },
  ];

  return (
    <section id="planes" className="py-24 px-6 bg-[#F5F1EB]">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-4">
            Planes diseñados para tu proceso
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            No necesitas tener todo claro. Solo dar el primer paso.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className={`rounded-2xl p-8 shadow-lg flex flex-col transition ${
                service.featured
                  ? "bg-[#8F9F78] text-white scale-105"
                  : "bg-white"
              }`}
            >
              {/* BADGE */}
              {service.featured && (
                <span className="bg-white text-[#8F9F78] text-xs px-3 py-1 rounded-full mb-4 w-fit font-semibold">
                  Recomendado
                </span>
              )}

              {/* TITLE */}
              <h3 className="text-2xl font-bold mb-1">
                {service.title}
              </h3>

              {/* SUBTITLE */}
              <p className="text-sm mb-4 opacity-80">
                {service.subtitle}
              </p>

              {/* DESCRIPTION */}
              <p className="mb-6 opacity-80">
                {service.description}
              </p>

              {/* LIST */}
              <ul className="space-y-3 mb-8">
                {service.includes.map((item, index) => (
                  <li key={index} className="flex gap-2 items-start">
                    <Check className="w-4 h-4 mt-1" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <a
                href="https://wa.me/573235412541"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto py-3 rounded-xl text-center font-semibold transition ${
                  service.featured
                    ? "bg-white text-[#8F9F78] hover:bg-gray-100"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                Elegir plan
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA FINAL */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            ¿Aún no sabes cuál elegir?
          </p>

          <a
            href="https://wa.link/impucj"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#8F9F78] text-white px-8 py-4 rounded-xl hover:bg-[#7A8C66] transition shadow-lg inline-block"
          >
            Hablar con un profesional
          </a>
        </div>

      </div>
    </section>
  );
}