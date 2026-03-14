import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
          Encuéntranos
        </h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Dirección</h3>
                <p className="text-muted-foreground">Rancagua 574, Providencia<br />Región Metropolitana, Chile</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Teléfono</h3>
                <a href="tel:+56953917416" className="text-primary hover:underline">
                  +56 9 5391 7416
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Horarios</h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>Lunes a Sábado: 09:00 – 23:00</li>
                  <li>Domingo: 10:00 – 22:00</li>
                </ul>
              </div>
            </div>

            <a
              href="tel:+56953917416"
              className="inline-block rounded-lg bg-accent px-6 py-3 text-base font-semibold text-accent-foreground transition-transform active:scale-[0.97] hover:brightness-105"
            >
              Llamar para Reservar
            </a>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-card h-[350px]">
            <iframe
              title="Ubicación Nabaru Restobar"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.4!2d-70.615!3d-33.435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI2JzA2LjAiUyA3MMKwMzYnNTQuMCJX!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
