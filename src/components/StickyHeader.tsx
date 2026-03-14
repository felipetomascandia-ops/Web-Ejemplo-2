import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="font-display text-2xl font-bold text-foreground">
          Nabaru
        </a>
        <nav className="hidden md:flex items-center gap-8 font-body text-sm text-muted-foreground">
          <a href="#menu" className="hover:text-foreground transition-colors">Menú</a>
          <a href="#nosotros" className="hover:text-foreground transition-colors">Nosotros</a>
          <a href="#contacto" className="hover:text-foreground transition-colors">Contacto</a>
        </nav>
        <a
          href="tel:+56953917416"
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-transform active:scale-[0.97]"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">Llamar</span>
        </a>
      </div>
    </header>
  );
};

export default StickyHeader;
