const Footer = () => {
  return (
    <footer className="border-t bg-card py-8">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span className="font-display font-bold text-foreground text-lg">Nabaru Restobar</span>
        <span>© {new Date().getFullYear()} Nabaru Restobar · Rancagua 574, Providencia</span>
      </div>
    </footer>
  );
};

export default Footer;
