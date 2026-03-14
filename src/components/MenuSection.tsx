import { motion } from "framer-motion";

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuCategory {
  title: string;
  emoji: string;
  items: MenuItem[];
}

const categories: MenuCategory[] = [
  {
    title: "Desayunos",
    emoji: "🍳",
    items: [
      {
        name: "Paila de huevo",
        description: "Huevos al estilo de la casa con acompañamientos tradicionales.",
        price: "Consultar",
      },
      {
        name: "Empanadas venezolanas",
        description: "Empanadas crujientes con rellenos a elección.",
        price: "Consultar",
      },
      {
        name: "Tequeños",
        description: "Palitos de queso recién hechos, perfectos para compartir.",
        price: "Consultar",
      },
      {
        name: "Pasteles",
        description: "Masa dorada con rellenos caseros.",
        price: "Consultar",
      },
      {
        name: "Sandwiches",
        description: "Opciones clásicas para comenzar el día.",
        price: "Consultar",
      },
      {
        name: "Jugos naturales",
        description: "Jugos de fruta fresca para acompañar tu desayuno.",
        price: "Consultar",
      },
    ],
  },
  {
    title: "Colaciones",
    emoji: "🍽️",
    items: [
      {
        name: "Porotos con rienda",
        description: "Clásico chileno, contundente y casero.",
        price: "Desde $6.500",
      },
      {
        name: "Pollo crispy a la napolitana",
        description: "Pollo crujiente con salsa y queso gratinado.",
        price: "Desde $6.500",
      },
      {
        name: "Pabellón venezolano",
        description: "Carne mechada, porotos negros, arroz y plátano maduro.",
        price: "Desde $6.500",
      },
      {
        name: "Costillas asadas",
        description: "Costillas al punto, servidas con acompañamientos.",
        price: "Desde $6.500",
      },
    ],
  },
  {
    title: "Tardes y Picoteo",
    emoji: "🌇",
    items: [
      {
        name: "Hamburguesas",
        description: "Hamburguesas caseras con sabores venezolanos y chilenos.",
        price: "Desde $8.990",
      },
      {
        name: "Cachapas",
        description: "Cachapas de maíz con queso derretido.",
        price: "Desde $8.990",
      },
      {
        name: "Arepas",
        description: "Arepas rellenas con opciones clásicas.",
        price: "Desde $8.990",
      },
      {
        name: "Salchipapas",
        description: "Papas fritas con salchichas y salsas de la casa.",
        price: "Desde $8.990",
      },
      {
        name: "Chorrillana mixta",
        description: "Carne, cebolla y papas para compartir.",
        price: "Desde $8.990",
      },
      {
        name: "Classic sandwich",
        description: "Sandwiches tradicionales con ingredientes frescos.",
        price: "Desde $8.990",
      },
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl font-bold text-foreground mb-2">Nuestro Menú</h2>
        <p className="text-muted-foreground mb-12 max-w-lg">
          Comida venezolana y chilena con preparaciones caseras y porciones generosas.
        </p>

        <div className="space-y-14">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                {cat.emoji} {cat.title}
              </h3>
              <motion.div
                className="grid sm:grid-cols-2 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
              >
                {cat.items.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    className="group rounded-2xl bg-card p-5 shadow-card transition-shadow hover:shadow-card-hover"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="font-display text-lg font-semibold text-foreground">
                          {item.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <span className="font-body font-medium text-primary tabular-nums whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
