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
    title: "Platos Principales",
    emoji: "🍖",
    items: [
      {
        name: "Pabellón Criollo",
        description: "Arroz, porotos negros, carne mechada y plátano maduro frito.",
        price: "$14.000",
      },
      {
        name: "Lomo Vetado a la Grilla",
        description: "200g de lomo premium con acompañamientos de la casa.",
        price: "$16.000",
      },
      {
        name: "Pechuga Crispy Napolitana",
        description: "Pollo crujiente con salsa napolitana, mozzarella gratinada, papas y arroz.",
        price: "$13.500",
      },
      {
        name: "Hamburguesa Nabaru",
        description: "Carne artesanal, queso cheddar, cebolla caramelizada y salsas de la casa.",
        price: "$13.000",
      },
    ],
  },
  {
    title: "Sopas",
    emoji: "🍲",
    items: [
      {
        name: "Sopa de Costilla Venezolana",
        description: "Carne de res en caldo con verduras, acompañada de arepa y limón.",
        price: "$12.000",
      },
      {
        name: "Crema de Auyama",
        description: "Crema suave de calabaza con toque de especias y pan artesanal.",
        price: "$9.500",
      },
    ],
  },
  {
    title: "Especialidades",
    emoji: "⭐",
    items: [
      {
        name: "Arepas Rellenas",
        description: "Arepa de maíz con relleno a elección: reina pepiada, carne mechada o porotos.",
        price: "$8.500",
      },
      {
        name: "Tequeños con Guasacaca",
        description: "Palitos de queso crujientes con salsa de aguacate venezolana.",
        price: "$7.000",
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
          Cocina venezolana y latinoamericana con productos frescos del día. Porciones generosas, siempre.
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
