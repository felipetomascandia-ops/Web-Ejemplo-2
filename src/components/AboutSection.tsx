import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-4xl font-bold text-foreground">
            Sobre Nabaru
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Nabaru Restobar nace del cariño por la cocina venezolana y la pasión
            por alimentar de verdad. En plena Providencia, ofrecemos platos
            abundantes con recetas caseras que cruzan fronteras: desde un Pabellón
            Criollo hasta un lomo a la grilla con todo el sabor latino.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Nuestro espacio es para compartir: almuerzos entre colegas, cenas con
            amigos o un trago después del trabajo. Comida honesta, sin
            pretensiones, con sazón de verdad.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {["Porciones generosas", "Sabor auténtico", "Ambiente casual", "Delivery"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
