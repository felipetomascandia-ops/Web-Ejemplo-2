import { motion } from "framer-motion";
import heroImg from "@/assets/hero-food.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-5 gap-8 items-center pt-24 pb-16">
        {/* Text */}
        <motion.div
          className="md:col-span-2 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <OpenIndicator />
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-[1.1] text-foreground">
            Sabor latino real en Providencia.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
            Porciones generosas, sabor venezolano auténtico en Rancagua 574. Comida de verdad para gente con hambre.
          </p>
          <a
            href="#menu"
            className="inline-block rounded-lg bg-accent px-6 py-3 text-base font-semibold text-accent-foreground transition-transform active:scale-[0.97] hover:brightness-105"
          >
            Ver Menú de Hoy
          </a>
        </motion.div>

        {/* Image */}
        <motion.div
          className="md:col-span-3"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <img
            src={heroImg}
            alt="Pabellón Criollo venezolano con arroz, caraotas negras, carne mechada y plátano frito"
            className="w-full h-[400px] md:h-[520px] object-cover rounded-2xl shadow-card"
          />
        </motion.div>
      </div>
    </section>
  );
};

function OpenIndicator() {
  const now = new Date();
  const day = now.getDay(); // 0=Sunday
  const hour = now.getHours();

  const isSunday = day === 0;
  const openHour = isSunday ? 10 : 9;
  const closeHour = isSunday ? 22 : 23;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${
        isOpen
          ? "bg-green-100 text-green-800"
          : "bg-red-100 text-red-800"
      }`}
    >
      <span className={`h-2 w-2 rounded-full ${isOpen ? "bg-green-500" : "bg-red-500"}`} />
      {isOpen ? "Abierto ahora" : `Abrimos a las ${isSunday ? "10:00" : "09:00"}`}
    </span>
  );
}

export default HeroSection;
