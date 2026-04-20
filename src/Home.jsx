import React from "react";
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
import PlanesSection from "./planes.jsx";
import BenefitsSection from "./BenefitsSection";
import yogainfantil from "./assets/yogainfantil.png";
import test1 from "./assets/test1.png";
import videobanner from "./assets/Videobanner1.mp4";









const testimonios = [
  {
    nombre: "María Gómez",
    texto: "Mi hijo ha mejorado muchísimo su forma de expresar emociones.",
    imagen: test1
  },
  {
    nombre: "Carlos Ruiz",
    texto: "Un espacio muy profesional y humano.",
    imagen: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    nombre: "Laura Pérez",
    texto: "Recomiendo totalmente el acompañamiento psicológico.",
    imagen: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const textosHero = [
  {
    titulo: (
      <>
        Donde el silencio <br />
        comienza a <br />
        <span className="text-[#A3B18A] italic">sanar</span>
      </>
    ),
    descripcion:
      "Has cargado mucho en silencio… Este es el espacio donde puedes soltar, entenderte y reconstruirte."
  },
  {
    titulo: (
      <>
        No tienes que poder <br />
        con todo <br />
        <span className="text-[#A3B18A] italic">siempre</span>
      </>
    ),
    descripcion:
      "Aquí puedes bajar la carga, sentirte acompañado y darte el permiso de ser humano."
  },
  {
    titulo: (
      <>
        Tu mente también <br />
        necesita <br />
        <span className="text-[#A3B18A] italic">un refugio</span>
      </>
    ),
    descripcion:
      "Un espacio seguro en Medellín donde puedes hablar, liberar y empezar a sanar."
  }
];



export default function Home() {

const [indexHero, setIndexHero] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndexHero((prev) => (prev + 1) % textosHero.length);
  }, 10000); // 10 segundos

  return () => clearInterval(interval);
}, []);


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

    <h1 className="sr-only">
  Psicólogos en Medellín | Centro de Psicología Ser Humano MED
</h1>
<section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">

  {/* FONDO */}
  <div className="absolute inset-0 z-0">

    {/* VIDEO */}
    <video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="w-full h-full object-cover scale-105"
>
  <source src={videobanner} type="video/mp4" />
</video>

    {/* OVERLAY OSCURO */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* DEGRADADO */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

  </div>

  {/* CONTENIDO */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

    <div className="max-w-2xl">

      {/* TEXTOS DINÁMICOS */}
      <AnimatePresence mode="wait">
        <motion.div
          key={indexHero}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-5xl md:text-7xl leading-[1.1] mb-6 tracking-tight font-bold text-white">
               {textosHero[indexHero].titulo}
          </h2>

          <p className="text-gray-200 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            {textosHero[indexHero].descripcion}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* BOTONES */}
      <div className="flex flex-wrap gap-4">

        {/* PRINCIPAL */}
        <a
          href="https://wa.me/573235412541?text=Hola%20quiero%20agendar%20una%20cita"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#A3B18A] text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:bg-[#8F9E76] transition flex items-center gap-2"
        >
          Agendar Cita →
        </a>

        {/* SECUNDARIO */}
        <a
          href="#servicios"
          className="border border-white/60 text-white px-6 py-3 rounded-xl font-medium hover:bg-white hover:text-gray-800 transition"
        >
          Ver servicios
        </a>

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
      <a href="#equipo" className="hover:text-green-600">Trabaja con nosotros</a>
      {/*<a href="#contacto" className="hover:text-green-600">Contacto</a>*/}
    </div>
    
  <a
  href="https://wa.me/573235412541?text=Hola%20quiero%20agendar%20una%20cita"
  target="_blank" // abre en nueva pestaña
  rel="noopener noreferrer" // seguridad
>
  <button className="bg-white text-[#A3B18A] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition shadow-md">
    Habla con nuestro equipo
  </button>
</a>

  </div>
</nav>

      
<>
  {/* SERVICIOS */}
  <section id="servicios" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">

      {/* TÍTULO */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Servicios de Psicología en Medellín
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto">
          Ofrecemos terapia psicológica en Medellín enfocada en ansiedad, depresión, bienestar emocional y desarrollo personal. Descubre nuestros servicios diseñados para tu crecimiento integral.
        </p>

        {/* REFUERZO LOCAL SEO */}
        <p className="text-sm text-gray-500 mt-2">
          Buscamos crear una experiencia única que permita cumplir los objetivos terapéuticos, 
          ofreciendo acompañamiento integral dentro y fuera del consultorio.
          
          
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {[
          {
            title: "Yoga terapéutico",
            img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597",
            short: "Yoga para el bienestar emocional.",
            description: "El yoga terapéutico ayuda a reducir la ansiedad, mejorar la concentración y fortalecer el bienestar emocional como complemento a la terapia psicológica."
          },
          {
            title: "Arte terapia",
            img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
            short: "Expresión emocional guiada.",
            description: "La arte terapia permite expresar emociones, trabajar bloqueos internos y mejorar la salud mental a través de procesos creativos guiados."
          },
          {
            title: "Grupos de apoyo emocional",
            img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
            short: "Apoyo psicológico en comunidad.",
            description: "Espacios grupales donde puedes compartir experiencias, recibir apoyo emocional y fortalecer tu proceso terapéutico con acompañamiento profesional."
          },
          {
            title: "Talleres de desarrollo personal",
            img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
            short: "Herramientas para tu crecimiento.",
            description: "Talleres enfocados en inteligencia emocional, manejo del estrés y crecimiento personal con profesionales en psicología."
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
              alt={`${item.title} en Medellín - Centro de Psicología`}
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
    src={video}
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

    {/* TÍTULO SEO */}
    <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
      Terapia psicológica en Medellín para <br />
      <span className="text-[#A3B18A] italic">
        transformar tu bienestar emocional
      </span>
    </h2>

    {/* TEXTO SEO */}
    <p className="text-lg text-gray-600 leading-relaxed">
      En <strong>Centro Ser Humano MED</strong> ofrecemos atención psicológica profesional en Medellín,
      con enfoques basados en evidencia científica para el tratamiento de ansiedad, depresión y procesos de crecimiento personal.
      <br /><br />
      Nuestro equipo de psicólogos en Medellín acompaña cada proceso de manera cercana,
      ética y personalizada, brindando herramientas efectivas para mejorar tu bienestar emocional
      y calidad de vida.
    </p>

   

  </motion.div>

</section>



{/* PSICOTERAPIA INFANTIL - BENTO GRID MEJORADO */}
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
          description: "Espacios terapéuticos diseñados para que los niños puedan expresar sus emociones a través del juego y el acompañamiento profesional."
        })}
        className="relative cursor-pointer md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden group shadow"
      >
        <img
          src="https://images.unsplash.com/photo-1516627145497-ae6968895b74"
          alt=""
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

        <div className="relative z-10 p-10 flex flex-col justify-end h-full text-white">
          <div className="text-4xl mb-4">🧸</div>
          <h4 className="text-3xl font-bold mb-2">Psicoterapia Infantil</h4>
          <p className="text-sm opacity-90 max-w-sm">
            Espacios de juego y expresión emocional.
          </p>
        </div>
      </div>

      {/* YOGA */}
      <div
        onClick={() => setSelected({
          title: "Yoga Infantil",
          description: "Movimiento consciente que ayuda a regular emociones y mejorar la concentración."
        })}
        className="relative cursor-pointer rounded-2xl overflow-hidden group shadow"
      >
        <img
          src={yogainfantil}
          alt=""
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

        <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white text-center">
          <div className="text-3xl mb-2">🧘</div>
          <h5 className="font-bold">Yoga Infantil</h5>
        </div>
      </div>

      {/* CUENTO */}
      <div
        onClick={() => setSelected({
          title: "Cuento Terapia",
          description: "Historias que ayudan a los niños a comprender y expresar sus emociones."
        })}
        className="relative cursor-pointer rounded-2xl overflow-hidden group shadow"
      >
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
          alt=""
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

        <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white text-center">
          <div className="text-3xl mb-2">📖</div>
          <h5 className="font-bold">Cuento Terapia</h5>
        </div>
      </div>

      {/* ESTIMULACIÓN */}
      <div
        onClick={() => setSelected({
          title: "Estimulación Temprana",
          description: "Desarrollo integral desde los primeros años de vida."
        })}
        className="relative cursor-pointer md:col-span-2 rounded-2xl overflow-hidden group shadow"
      >
        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350"
          alt=""
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        <div className="relative z-10 p-10 flex flex-col justify-end h-full text-white">
          <div className="text-4xl mb-4">🧩</div>
          <h5 className="text-2xl font-bold">Estimulación Temprana</h5>
          <p className="text-sm opacity-90">
            Bases sólidas para el desarrollo infantil.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>


<BenefitsSection />

<PlanesSection />

 

        {/* EQUIPO */}
<section className="py-32 bg-[#F5F1EB]" id="equipo">
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
        <div className="w-80 h-80 bg-[#A3B18A] rounded-full relative">

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
<section className="py-24 px-6 bg-[#F5F1EB] text-center relative overflow-hidden">

  {/* DECORACIÓN DE FONDO */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div className="absolute top-10 left-10 text-6xl">💬</div>
    <div className="absolute bottom-10 right-10 text-6xl">✨</div>
  </div>

  <h2 className="text-4xl font-bold mb-4">
    Testimonios
  </h2>

  <p className="text-gray-600 mb-12">
    Experiencias reales que reflejan nuestro compromiso
  </p>

  <div className="relative max-w-2xl mx-auto">

    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -80 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-10 rounded-2xl shadow-xl relative"
      >

        {/* ICONO COMILLAS */}
        <div className="absolute -top-6 left-6 text-5xl text-[#A3B18A] opacity-30">
          ❝
        </div>

        {/* AVATAR */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={testimonios[index].imagen}
            alt={testimonios[index].nombre}
            className="w-16 h-16 rounded-full object-cover mb-3 border-4 border-[#A3B18A]/30"
          />

          <h4 className="font-semibold text-lg">
            {testimonios[index].nombre}
          </h4>

          {/* ESTRELLAS */}
          <div className="flex gap-1 text-yellow-400 mt-2">
            {"★★★★★".split("").map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
        </div>

        {/* TEXTO */}
        <p className="italic text-gray-600 leading-relaxed max-w-md mx-auto">
          "{testimonios[index].texto}"
        </p>

      </motion.div>
    </AnimatePresence>

    {/* BOTONES */}
    <div className="flex justify-center gap-4 mt-8">
      <button
        onClick={prev}
        className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition"
      >
        ←
      </button>

      <button
        onClick={next}
        className="w-10 h-10 flex items-center justify-center bg-[#A3B18A] text-white rounded-full hover:scale-110 transition"
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
        link: "https://www.instagram.com/reel/DWceNcxjmWE/"
      },
      {
        img: inst3,
        link: "https://www.instagram.com/reel/DWP8jLtjj8L/"
      },
      {
        img: inst4,
        link: "https://www.instagram.com/reel/DWZang4DloO/"
      },
      {
        img: inst5,
        link: "https://www.instagram.com/reel/DWP8jLtjj8L/"
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
    Agenda tu cita con un psicólogo en Medellín
  </h2>

  <p className="max-w-xl mx-auto mb-8 text-white/90">
    Da el primer paso hacia tu bienestar emocional. Recibe atención psicológica profesional en Medellín para ansiedad, depresión y crecimiento personal. Escríbenos por WhatsApp y agenda tu sesión hoy mismo.
  </p>

 

  <a
    href="https://wa.me/573235412541?text=Hola%20quiero%20agendar%20una%20cita"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="bg-white text-[#A3B18A] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition shadow-md">
      Agendar cita por WhatsApp
    </button>
  </a>

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
  href="https://wa.link/lr3s1x" 
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
