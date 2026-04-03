import React from "react";
import logo from "./assets/logo.png";
import video from "./assets/0403.mp4";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import whatsappIcon from "./assets/whatsapp.png";
import inst1 from "./assets/inst1.png";
import inst2 from "./assets/inst2.png";
import inst3 from "./assets/inst3.png";
import inst4 from "./assets/inst4.png";
import inst5 from "./assets/inst5.png";
import inst6 from "./assets/inst6.png";
import inst7 from "./assets/inst7.png";
import inst8 from "./assets/inst8.png";
import crecimiento from "./assets/crecimiento.png";
import aprendizaje from "./assets/aprendizaje.png";
import entorno from "./assets/entorno.png";

const testimonios = [
  {
    texto: "Gracias a este centro logré superar una etapa difícil de mi vida.",
    nombre: "María López",
  },
  {
    texto: "El acompañamiento fue increíble, muy profesionales.",
    nombre: "Carlos Ramírez",
  },
  {
    texto: "Me sentí escuchado y comprendido desde la primera sesión.",
    nombre: "Laura Gómez",
  },
];



export default function Home() {

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonios.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonios.length) % testimonios.length);
  };

 
  const [selected, setSelected] = useState(null);
  

  // Auto cambio (corregido)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonios.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
      

    <div className="font-sans text-gray-800 bg-[#F5F1EB]">
      {/* HERO */}
       {/* HERO */}
<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

  {/* FONDO */}
  <div className="absolute inset-0 z-0">

    <img 
      src="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
      alt="Consultorio psicológico"
      className="w-full h-full object-cover brightness-95 opacity-40"
    />

    {/* DEGRADADO */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#F5F1EB] via-[#F5F1EB]/80 to-transparent"></div>
  </div>

  {/* CONTENIDO */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

    <div className="max-w-2xl">

      <h1 className="text-5xl md:text-7xl leading-[1.1] mb-6 tracking-tight font-bold text-gray-800">
        Tu bienestar <br />
        <span className="text-[#A3B18A] italic">emocional</span> <br />
        comienza hoy
      </h1>

      <p className="text-gray-600 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
        Conoce la nueva forma de tomar psicoterapia... Un refugio diseñado para tu mente, cuerpo y espíritu en el corazón de Medellín.
      </p>

      {/* BOTONES */}
      <div className="flex flex-wrap gap-4">

        {/* PRINCIPAL */}
        <button className="bg-[#A3B18A] hover:bg-[#8F9F78] text-white px-8 py-4 rounded-xl font-medium transition shadow-lg">
          Agendar Cita
        </button>

        {/* SECUNDARIO */}
        <button className="border border-[#A3B18A] text-[#A3B18A] px-8 py-4 rounded-xl font-medium hover:bg-[#A3B18A] hover:text-white transition">
          Servicios
        </button>

      </div>

    </div>
  </div>
</section>

      <nav className="fixed top-0 w-full bg-[#F5F1EB] backdrop-blur-md shadow z-50">
  <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
    <h1 className="text-xl font-bold text-[#8F9F78]">
      Centro de Psicología SER Humano
    </h1>
    <div className="hidden md:flex gap-6">
      <a href="#inicio" className="hover:text-green-600">Inicio</a>
      <a href="#servicios" className="hover:text-green-600">Servicios</a>
      <a href="#equipo" className="hover:text-green-600">Equipo</a>
      {/*<a href="#contacto" className="hover:text-green-600">Contacto</a>*/}
    </div>
    <button className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700">
      Agendar
    </button>
  </div>
</nav>

      
<>
  {/* SERVICIOS */}
  <section className="py-20 px-6">
    <div className="max-w-6xl mx-auto">

      {/* TÍTULO */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Innovación que impulsa la mejora del SER
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto">
          Buscamos crear una experiencia única que permita cumplir los objetivos terapéuticos,
          ofreciendo acompañamiento integral dentro y fuera del consultorio.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {[
          {
            title: "Yoga",
            img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597",
            short: "Beneficios del yoga y la meditación.",
            description: "Descubre los beneficios de la práctica de yoga y la meditación como complemento a tu proceso psicoterapéutico, mejorando tu equilibrio emocional, concentración y bienestar integral."
          },
          {
            title: "Arte Terapia",
            img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
            short: "Expresión emocional a través del arte.",
            description: "Encuentra en el arte una forma de expresar emociones reprimidas, desarrollar tu creatividad y transformar tu vida en una obra consciente dirigida por ti."
          },
          {
            title: "Grupos de Apoyo",
            img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
            short: "Comunidad y apoyo emocional.",
            description: "Creemos en el poder del ser social, por eso generamos espacios de conexión donde las personas encuentran apoyo, comprensión y crecimiento en comunidad."
          },
          {
            title: "Talleres y Charlas",
            img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
            short: "Aprendizaje y desarrollo personal.",
            description: "Apostamos por la psicoeducación, programación neurolingüística y el autodesarrollo, brindando herramientas prácticas con profesionales altamente capacitados."
          }
        ].map((item, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setSelected(item)}
            className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
          >
            {/* IMAGEN */}
            <img 
              src={item.img}
              alt={item.title}
              className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent group-hover:from-black/80 transition"></div>

            {/* TEXTO */}
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-sm opacity-90">{item.short}</p>
            </div>

          </motion.div>

        ))}

      </div>

    </div>
  </section>

  
</>




      {/* SOBRE NOSOTROS */}
      
<section className="py-24 px-6 bg-[#F5F1EB] text-center">

  <motion.video
    src={video} // o una URL si está online
    autoPlay
    muted
    playsInline
    initial={{ scale: 0.6, opacity: 0 }}
    whileInView={{ scale: 1.05, opacity: 1 }}
    transition={{ duration: 1.2 }}
    className="mx-auto w-[80%] md:w-[850px] mb-12 drop-shadow-2xl rounded-2xl object-cover"
  />

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="max-w-3xl mx-auto"
  >

    {/* TÍTULO */}
    <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
      Un enfoque terapéutico diseñado para <br />
      <span className="text-[#A3B18A] italic">
        transformar tu bienestar
      </span>
    </h2>

    {/* TEXTO */}
    <p className="text-lg text-gray-600 leading-relaxed">
      En <strong>SER Humano</strong> trabajamos con metodologías basadas en evidencia científica,
      integrando herramientas innovadoras y personalizadas para cada proceso terapéutico.
      <br /><br />
      Nuestro equipo de profesionales acompaña cada historia de forma cercana,
      ética y comprometida, creando espacios donde el cambio no solo es posible,
      sino sostenible en el tiempo.
    </p>

  </motion.div>

</section>



{/* PSICOTERAPIA INFANTIL - BENTO GRID */}
<section className="py-24 bg-[#F5F1EB]">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl text-center mb-16 font-bold">
      Psicoterapia <span className="text-[#A3B18A] italic">Infantil</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[600px]">

      {/* CARD GRANDE */}
      <div
        onClick={() => setSelected({
          title: "Psicoterapia Infantil",
          description: "Espacios terapéuticos diseñados para que los niños puedan expresar sus emociones a través del juego, el diálogo y técnicas especializadas que favorecen su desarrollo emocional y social."
        })}
        className="cursor-pointer md:col-span-2 md:row-span-2 bg-white rounded-2xl p-10 flex flex-col justify-end relative overflow-hidden group shadow hover:scale-[1.02] transition"
      >
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAltCMyopk-C53QSDeGRDTrY0k7ej-HPuIgMQCsKOLyluTx_Zxp7H9pGv_rLFN04c9gYQLvkrsg5dDuCdbNll93wOc96MB5Nl1CBiZPaI2Rcq_utBf0ZR79251dStxdf2PclsiyCKBxVu_SirPfzyeb5d93vKEcW_iyxD2eNyqpLLzgkA4euBvwIwivwPpHSXT0Jljdx8mvqY2E2j3rVjTIMjzqSponD4VYxjvzCTSMYKM2myrHf_0dfiLk_jY1qOR2Hq1J8ttSoMQ"
          alt="Psicoterapia infantil"
          className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-105 transition duration-700"
        />

        <div className="relative z-10">
          <div className="text-4xl text-[#A3B18A] mb-6">🧸</div>
          <h4 className="text-3xl font-bold mb-4">Psicoterapia Infantil</h4>
          <p className="text-gray-600 max-w-sm">
            Espacios de juego y diálogo adaptados para el desarrollo emocional.
          </p>
        </div>
      </div>

      {/* YOGA */}
      <div
        onClick={() => setSelected({
          title: "Yoga Infantil",
          description: "El yoga infantil mejora la flexibilidad, coordinación y concentración, además de fomentar la calma, la autoestima y la gestión emocional mediante actividades lúdicas."
        })}
        className="cursor-pointer bg-white rounded-2xl p-8 flex flex-col items-center text-center justify-center border border-[#A3B18A]/10 shadow hover:scale-105 transition"
      >
        <div className="text-3xl text-[#A3B18A] mb-4">🧘</div>
        <h5 className="font-bold mb-2">Yoga Infantil</h5>
        <p className="text-sm text-gray-600">
          Movimiento consciente para niños.
        </p>
      </div>

      {/* CUENTO */}
      <div
        onClick={() => setSelected({
          title: "Cuento Terapia",
          description: "La cuento terapia permite a los niños expresar emociones, resolver conflictos y desarrollar su inteligencia emocional a través de historias que reflejan sus vivencias."
        })}
        className="cursor-pointer bg-white rounded-2xl p-8 flex flex-col items-center text-center justify-center border border-[#A3B18A]/10 shadow hover:scale-105 transition"
      >
        <div className="text-3xl text-[#A3B18A] mb-4">📖</div>
        <h5 className="font-bold mb-2">Cuento Terapia</h5>
        <p className="text-sm text-gray-600">
          Narrativas que sanan el alma.
        </p>
      </div>

      {/* ESTIMULACIÓN */}
      <div
        onClick={() => setSelected({
          title: "Estimulación Temprana",
          description: "Programa dirigido a niños de 0 a 6 años que fortalece el desarrollo cognitivo, motor, emocional y social, potenciando sus habilidades desde una etapa temprana."
        })}
        className="cursor-pointer md:col-span-2 bg-[#EFE8E0] rounded-2xl p-10 flex items-center gap-8 border border-[#A3B18A]/10 shadow hover:scale-[1.02] transition"
      >
        <div className="flex-1">
          <h5 className="text-2xl font-bold mb-2">Estimulación Temprana</h5>
          <p className="text-gray-600">
            Bases sólidas para un crecimiento saludable.
          </p>
        </div>

        <div className="text-5xl text-[#A3B18A]/60">🧩</div>
      </div>

    </div>
  </div>
</section>
 

        {/* EQUIPO */}
<section className="py-32 bg-[#F5F1EB]" id="team">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="text-center mb-24">
      <h2 className="text-4xl font-bold mb-4">
        Buscamos talento excepcional que se una a nuestro equipo
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto italic">
        Alquiler de espacio terapéutico  <br></br>
        Contáctenos y juntos mejoraremos la psicoterapia. <br></br>
        Expertos comprometidos con tu transformación personal, brindando calidez y profesionalismo en cada encuentro.
      </p>
    </div>

   {/* GRID */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">

  {[
    {
      name: "Proyecto en crecimiento",
      role: "Sé parte de un espacio en expansión donde tu talento impulsa el bienestar de otros.",
      img: crecimiento
    },
    {
      name: "Aprendizaje continuo",
      role: "No requieres experiencia. Desarrolla tus habilidades junto a profesionales comprometidos con la excelencia terapéutica.",
      img: aprendizaje
    },
    {
      name: "Entorno saludable",
      role: "Trabaja en un ambiente humano, consciente y enfocado en el crecimiento personal y profesional.",
      img: entorno
    }
  ].map((item, i) => (

    <div key={i} className="group">

      {/* IMAGEN */}
      <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[3/4] shadow">

        <img 
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700 group-hover:scale-105"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
      </div>

      {/* INFO */}
      <h4 className="text-xl font-semibold text-center">
        {item.name}
      </h4>

      <p className="text-[#A3B18A] text-sm font-medium mb-4 text-center">
        {item.role}
      </p>

      

    </div>

  ))}

</div>
  </div>
</section>

{/* Banner2 */}

{/* TESTIMONIOS PREMIUM */}
<section className="py-32 bg-[#EFE8E0] overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="flex items-center gap-4 mb-12">
      <div className="w-12 h-[1px] bg-[#A3B18A]"></div>
      <span className="text-[#A3B18A] font-bold uppercase tracking-widest text-xs">
        Indicadores clave de los logros de la empresa
      </span>
    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

      {/* TEXTO */}
      <div className="space-y-12">

        {/* TESTIMONIO 1 */}
        <div className="relative">
          <span className="text-6xl text-[#A3B18A]/10 absolute -top-8 -left-4">
            “
          </span>

          <blockquote className="text-2xl leading-relaxed italic text-gray-800">
            Un análisis profundo del mundo interior nos permite observar la grandeza del mundo exterior
          </blockquote>

          <cite className="block mt-6 text-gray-600 font-medium not-italic">
            
          </cite>
        </div>

        {/* TESTIMONIO 2 */}
        <div className="relative">
          <blockquote className="text-2xl leading-relaxed italic text-gray-800">
            Nuestros indicadores clave, desde el crecimiento de los ingresos hasta la retención de clientes y la expansión del mercado, 
            estarán disponibles a la vista de nuestros usuarios, con el fin de mejorar y buscar continuamente el crecimiento de nuestra comunidad.
          </blockquote>

          <cite className="block mt-6 text-gray-600 font-medium not-italic">
            — Se parte del cambio
          </cite>
        </div>

      </div>

      {/* IMAGEN */}
      <div className="hidden md:flex justify-end items-center">
        <div className="w-80 h-80 bg-[#F5F1EB] rounded-full relative">

          <img 
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
            alt="Bienestar emocional"
            className="absolute top-10 -left-10 w-full h-full object-cover rounded-full shadow-2xl"
          />

        </div>
      </div>

    </div>
  </div>
</section>




     {/* TESTIMONIOS */}
<section className="py-20 px-6 bg-[#F5F1EB] text-center">
  <h2 className="text-3xl font-bold mb-10">
    Testimonios
  </h2>

  <div className="relative max-w-2xl mx-auto">

    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-lg"
      >
        <p className="italic text-lg mb-4">
          "{testimonios[index].texto}"
        </p>

        <h4 className="font-semibold text-green-600">
          {testimonios[index].nombre}
        </h4>
      </motion.div>
    </AnimatePresence>

    {/* BOTONES */}
    <div className="flex justify-center gap-4 mt-6">
      <button
        onClick={prev}
        className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
      >
        ←
      </button>

      <button
        onClick={next}
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        →
      </button>
    </div>
  </div>
</section>
      

{/* INSTAGRAM / GALERÍA */}
<section className="py-20 px-6">
  <h2 className="text-3xl font-bold text-center mb-10">
    INSTAGRAM - GALERÍA
  </h2>
          
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
    
    {[
      {
        img: inst1,
        link: "https://www.instagram.com/reel/DWh7EtJDgIh/"
      },
      {
        img: inst2,
        link: "https://www.instagram.com/p/POST2"
      },
      {
        img: inst3,
        link: "https://www.instagram.com/p/POST3"
      },
      {
        img: inst4,
        link: "https://www.instagram.com/p/POST4"
      },
      {
        img: inst5,
        link: "https://www.instagram.com/p/POST5"
      },
      {
        img: inst6,
        link: "https://www.instagram.com/p/POST6"
      },
      {
        img: inst7,
        link: "https://www.instagram.com/p/POST7"
      },
      {
        img: inst8,
        link: "https://www.instagram.com/p/POST8"
      }
    ].map((item, i) => (
      
      <a 
        key={i}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group overflow-hidden rounded-xl block"
      >
        {/* IMAGEN */}
        <img 
          src={item.img}
          alt="Galería"
          className="w-full aspect-[4/5] object-cover transition duration-500 group-hover:scale-110"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="white" 
            className="w-6 h-6 transform scale-75 group-hover:scale-100 transition"
          >
            <path d="M7.75 2C4.686 2 2 4.686 2 7.75v8.5C2 19.314 4.686 22 7.75 22h8.5C19.314 22 22 19.314 22 16.25v-8.5C22 4.686 19.314 2 16.25 2h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm6.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 9a3 3 0 100 6 3 3 0 000-6z"/>
          </svg>

        </div>
      </a>

    ))}

  </div>
</section>

{/* UBICACIÓN */}
<section className="py-20 px-6 bg-[#F5F1EB]">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

    {/* TEXTO */}
    <div>
      <h2 className="text-3xl font-bold mb-6">
        Nuestra Ubicación
      </h2>

      <p className="text-gray-600 mb-4">
        Nos encontramos en la ciudad de Medellín, en el barrio Laureles, brindando un espacio
        cómodo, seguro y profesional para tu bienestar emocional.
      </p>

      <p className="text-gray-700 mb-6">
        📍 Dirección: Calle 35 #80A-02, Laureles, Medellín
      </p>

      <a 
        href="https://maps.app.goo.gl/1ZwtrjuWVesUq15B8"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
      >
        Ver en Google Maps
      </a>
    </div>

    {/* MAPA */}
    {/* MAPA */}
<div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">
  <iframe
    title="Ubicación en Google Maps"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.157330048502!2d-75.60119279999999!3d6.2429863999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429993d3612a3%3A0x5a566e1bf184de8b!2sCl.%2035%20%2380a%20-%2002%2C%20Laureles%20-%20Estadio%2C%20Medell%C3%ADn%2C%20Laureles%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses-419!2sco!4v1775164098631!5m2!1ses-419!2sco"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

  </div>
</section>


     {/* CTA */}
<section className="py-20 bg-[#A3B18A] text-white text-center">

  <h2 className="text-3xl md:text-4xl font-bold mb-6">
    Da el primer paso hacia tu bienestar
  </h2>

  <p className="max-w-xl mx-auto mb-8 text-white/90">
    Agenda tu sesión y comienza un proceso de transformación personal acompañado
    por profesionales comprometidos con tu crecimiento emocional.
  </p>

  <button className="bg-white text-[#A3B18A] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition shadow-md">
    Agendar cita
  </button>

</section>

{selected && (
  <div
    onClick={() => setSelected(null)}
    className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[1000] p-4"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-white max-w-lg w-full p-8 rounded-2xl shadow-xl"
    >
      <h3 className="text-2xl font-bold mb-4 text-[#A3B18A]">
        {selected.title}
      </h3>

      <p className="text-gray-600 mb-6 leading-relaxed">
        {selected.description}
      </p>

      <button
        onClick={() => setSelected(null)}
        className="w-full bg-[#A3B18A] hover:bg-[#8FA876] text-white px-6 py-3 rounded-xl transition"
      >
        Cerrar
      </button>
    </div>
  </div>
)}

      {/* FOOTER */}
      <footer className="py-6 text-center text-sm bg-gray-100">
        © 2026 Centro de Psicología SER Humano. Todos los derechos reservados. <br />
        Calle 35 #80A-02, Laureles, Medellín 
      </footer>

      {/* WHATSAPP */}
      {/* WHATSAPP */}
<a 
  href="https://wa.me/573001234567" 
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 flex items-center justify-center transition transform hover:scale-110"
>
  <img 
    src={whatsappIcon} 
    alt="WhatsApp"
    className="w-6 h-6"
  />
</a>
    </div>
  );
}
